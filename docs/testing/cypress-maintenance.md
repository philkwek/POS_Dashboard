# Cypress Maintenance and Flaky Test Quarantine

## Quality Gates

- PRs must pass **smoke** E2E checks.
- Main/release must pass **full regression** E2E checks.
- Cypress artifacts (screenshots/videos) are uploaded on failures for triage.

## Flaky Test Quarantine Policy

When a spec/test flakes repeatedly:

1. Mark the flaky case with `.skip` and annotate a TODO that references the tracking issue.
2. Keep the rest of the suite active (do not disable whole specs unless unavoidable).
3. Open a follow-up issue with:
   - Failing spec/test name
   - Reproduction evidence (CI run link + artifact)
   - Suspected root cause
   - Exit criteria for unquarantine
4. Re-enable quarantined tests only after two consecutive green runs in CI.

## Ongoing Review Cadence

- Review selectors quarterly for UI drift.
- Review edge-case coverage after every feature touching routing/auth/data loading.
- Add or update Cypress coverage for every frontend bug fix to avoid regressions.
