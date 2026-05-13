# Source Modeling Guide

This directory contains the package's Schema.org CRDT implementation. This file
is for contributors changing `src/`; consumer-facing API documentation belongs
in the package root README and generated TypeDoc output.

## Text Modeling

Schema.org `Text` does not automatically mean `CRText`.

- Natural-language content uses `CRText`.
- Structured textual values use direct `CRStruct` scalar values.
- Multi-value textual properties use `CRSet<SchemaOrgText>` unless ordering is
  part of the Schema.org semantics.

Natural-language content means human-authored prose or labels where character
level collaborative editing is useful or at least semantically safe:

- names and aliases that are edited as text content
- descriptions, summaries, headlines, captions, review bodies and explanations
- slogans and similar short authored text

Structured textual values are single field values where character-level merging
can create an invalid or misleading result:

- URL, email, phone and fax values
- identifiers, codes, tax IDs, unit codes, currency codes and versions
- latitude, longitude, postal code, timezone, hash and HTTP method values
- address components when treated as form fields

When a structured textual value has a clear lexical format, add a narrow
property-specific validator. Do not add generic validator frameworks or broad
type checks; `CRStruct` already enforces basic shape compatibility.

The unit test `single-value CRText fields are explicitly natural-language
content` is the enforcement point for this rule. If a new single-value
`CRTextSnapshot` is legitimate, add it to that allowlist with the property name
spelled explicitly.

## Schema.org Updates

Track Schema.org releases directly. Do not invent aliases, hierarchy, property
names or class relationships that Schema.org does not define.

New Schema.org properties can be added normally:

- add the property to the relevant shape and state types
- choose `CRText`, scalar, `CRSet`, `CRList` or `CRMap` by semantics
- add validators only for clear lexical formats
- update exports, tests, README/TypeDoc-facing docs and benchmarks when touched

Superseded, renamed or replaced Schema.org properties require an explicit
migration path. Do this only when a Schema.org release marks a property as
superseded or gives an equivalent replacement.

## Property Migration Policy

For property renames or replacements, use three phases.

### Phase 1: Dual Read And Write

Add the new canonical property and keep the old property temporarily.

- Reads must support both old and new keys.
- If both keys exist, the new canonical key wins.
- Writes through either key must keep the old and new representation in sync
  during this phase.
- New snapshots and deltas may include both keys only for compatibility.
- Mark the old property as deprecated in source and public API docs.

The deprecation marker must include an exact removal date:

```ts
/**
 * @deprecated Superseded by newProperty. DEPRECATED 2026-05-13.
 * REMOVED AFTER 2027-05-13.
 */
```

Use the edit date as `DEPRECATED YYYY-MM-DD`. Use one calendar year after that
date as `REMOVED AFTER YYYY-MM-DD`.

### Phase 2: Migration-Only Read

After the grace period, or in the next major release after the grace period,
remove public write support for the old property.

- New code must not write or emit the old key.
- Constructors and `merge()` may still read old snapshots or deltas and migrate
  them into the new key.
- The old property must remain documented in source as migration-only with the
  same replacement and removal date.
- Tests must prove old input hydrates or merges into the new canonical key.

This phase lets older persisted schema-crdt snapshots survive one more upgrade
without allowing applications to keep producing obsolete data.

### Phase 3: Removal

In the next major release after migration-only support, remove the old key
entirely.

- Remove old types, runtime handling, validators and tests.
- Remove migration-only source comments.
- Keep changelog or release notes explicit about the final removal.

If the project chooses strict major-version semantics instead of calendar
removal for a specific property, use this wording instead of `REMOVED AFTER`:

```ts
/**
 * @deprecated Superseded by newProperty. DEPRECATED 2026-05-13.
 * REMOVED IN THE NEXT MAJOR UPDATE.
 */
```

Do not silently drop or alias superseded properties. Every migration must have a
clear canonical property, conflict rule, write behavior and removal plan.
