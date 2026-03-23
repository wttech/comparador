# Changelog

## 1.2.0

- Automatic comparison — captures compared against baselines with per-type thresholds
- Auto-accept — identical captures auto-accepted, cascading to parent capture
- Compare script — configurable normalization for selectors, script filters, headers and regex replace patterns
- Script context & built-in defaults — page and compare scripts receive `comparador` (auto-upgrading defaults) and `project` (per-project variables) globals
- Comparison badges — inline diff status on captures and attempts
- Review page — status filter, bulk accept/reject
- Enhanced page script — font smoothing freeze, deep-merge config from project variables
- Configurable page readiness — waitUntil lifecycle (load, networkAlmostIdle, networkIdle)
- Capture hardening — tab-based capture avoids window flash on Windows
- Clear with baseline preservation
- Database wipe & storage stats on settings page
- Help rewrite — new Automation chapter covering all five scripts and variables
- Bug fixes and stability improvements

## 1.1.0

- Baseline & review workflow — accept/reject captures and individual URLs, automatic + manual baseline pinning
- Review page — dedicated view for reviewing pending captures with progress tracking
- Built-in help — documentation with diagrams, covering all features
- Dashboard with pending review shortcuts
- Deletion protection for capture-bound attempts
- Dependency updates and bug fixes

## 1.0.2

- Database backup & restore
- Quick capture buttons on project/group lists
- Compare buttons to diff last 2 attempts/captures
- Enhanced attempt view with dropdown actions
- Improved stability when switching/deleting projects
- UI polish and bug fixes

## 1.0.1

- Initial release
