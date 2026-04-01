# Changelog

## 1.2.0

- **Automatic comparison** — every capture is instantly diffed against its baseline across screenshots, HTML, and headers with configurable thresholds
- **Auto-accept** — identical captures are auto-accepted and cascade up, so you only review what actually changed
- **Screenshot masks** — mask dynamic page regions (ads, carousels, timestamps) by CSS selector — masked areas get a checkerboard overlay in screenshots and their markup is stripped from diffs
- **Compare script** — normalize away noise before diffing: strip analytics, CDN tokens, dynamic selectors, headers — with regex patterns and script filters
- **Compare script tester** — test normalization scripts inline from project settings with live diff preview
- **Comparison badges** — see diff status at a glance on every capture and attempt
- **Compare filters** — filter URL pairs by differences or identical in capture comparison view, with auto-switch to differences when verdicts resolve
- **Review page** — filter by status, bulk accept/reject across captures
- **Post-capture actions** — View, Compare (pre-filtered to differences), and Review buttons after capture completes
- **Smart script context** — page and compare scripts receive auto-upgrading `comparador` defaults and per-project `project` variables
- **Configurable page readiness** — choose when to capture: on load, network almost idle, or full network idle
- **Per-project parallel capture** — configurable parallel capture concurrency per project
- **Capture hardening** — tab-based capture eliminates the window flash on Windows
- Auto-switch to first diff tab with changes when navigating between URL pairs
- Clear with baseline preservation, database wipe & storage stats
- Switched from Monaco Editor to CodeMirror for a lighter bundle and snappier diffs
- Updated help with a new Automation chapter covering all five scripts and variables
- Compressed backups — smaller export files, faster backup & restore
- Hardened backup & restore — large file support, interactive modals with progress tracking, tab-close prevention
- Faster navigation in comparison views due to optimized data loading and rendering
- Bug fixes and stability improvements

## 1.1.0

- **Baseline & review workflow** — accept/reject captures and individual URLs, automatic + manual baseline pinning
- **Pixelmatch engine** — replaced ResembleJS with a lighter, faster pixel comparison engine
- **Review page** — dedicated view for triaging pending captures with progress tracking
- **Built-in help** — illustrated documentation covering all features, right inside the extension
- **Dashboard** — quick access to pending reviews
- Deletion protection for capture-bound attempts, dependency updates, and bug fixes

## 1.0.2

- **Database backup & restore** — export and import full project data
- **Quick capture** — one-click capture buttons on project and group lists
- **Quick compare** — diff the last two attempts or captures instantly
- UI polish and stability improvements

## 1.0.1

- Initial release
