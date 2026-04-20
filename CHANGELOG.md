# Changelog

## 1.3.5

- **Context-gated review** — accept/reject buttons only appear when the current entity is newer than the baseline, preventing accidental review of historical data
- **State reason tracking** — auto-accepted items now show why they were accepted (first capture, identical content, or promoted), visible in badge tooltips
- **Smarter capture thumbnails** — preview attempts follow URL display order with baseline-aware fallback
- **Overflow-safe select tags** — long project/group/URL names in selectors truncate with ellipsis instead of breaking the layout
- **WCAG AA themed colors** — light and dark themes use separate color palettes, each verified for ≥4.5:1 contrast ratio
- Faster state-based filtering in review queries
- Bug fixes, performance improvements, and UI polish

## 1.3.4

- **Faster diff view** — new fast engine is now the default for HTML and headers diffs, dramatically improving rendering speed; rich engine available as an experimental alternative for character-level highlighting
- **Syntax highlighting for headers diff** — HTTP response headers now have color-coded header names and values in the diff view
- **Searchable compare selectors** — capture and attempt dropdowns now include a search input with contextual hints for quick filtering
- Upgraded core UI framework and dependencies
- Bug fixes, performance improvements, and UI polish

## 1.3.1

- **Compare baseline with previous** — when the latest capture is already the baseline, compare automatically diffs it against the prior version
- **Eager loading** — page script strips `loading="lazy"` before scrolling to prevent cancelled fetches in background tabs (`prepare.eager`, on by default)
- Unified comparison logic across all compare buttons
- Bug fixes and stability improvements

## 1.3.0

- **Logs diff** — five diff tabs now: screenshots, HTML, headers, console logs, and performance metrics. Logs are grouped by message and severity — see new errors appear, old ones vanish, or counts shift
- **Metrics diff** — track 20 performance indicators (TTFB, DOM load, JS heap, resources, layout) with threshold-based verdicts, worsened-only mode, smart defaults for volatile metrics, and configurable per-metric thresholds
- **Per-type verdict control** — include or exclude any diff tab from the overall verdict independently — disable noisy channels without losing visibility
- **Diff tab severity indicators** — tab icons are color-coded by diff severity so you instantly see which data types have changes
- **Smarter compare filters** — improved identical/differences/all filter logic with automatic filter and tab switching based on resolved verdicts
- **Compare script for all types** — the compare script now normalizes all four text-based data types: HTML, headers, logs, and metrics — with consistent ignore patterns supporting exact strings and `{ regex: "..." }` objects
- **Restructured compare variables** — `compare` section uses clean subkeys (`html`, `headers`, `logs`, `metrics`) for all diff types
- **JSON5 validation** — variables editor validates syntax in real time with inline error markers
- Comparison data stored separately from metadata for faster list views

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
