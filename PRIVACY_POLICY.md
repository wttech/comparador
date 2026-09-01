# Privacy Policy

**Last updated:** August 18, 2026

## Overview

Comparador is a **developer tool** — a Chrome extension designed for developers and QA engineers to capture and compare web pages across environments (development, staging, production). This policy explains what data the extension accesses and how it's handled.

## Summary

- ✅ **Developer tool** — Intended for technical users comparing web environments
- ✅ **No data transmission by default** — Captured data stays on your device unless you explicitly configure Project Sync
- ✅ **No analytics or tracking** — No third-party services integrated
- ✅ **No remote code** — All code runs locally from the extension package
- ✅ **User-initiated only** — Extension only acts when you explicitly trigger a capture or configure a feature that requires it

## Data Handling

**By default, Comparador does NOT transmit any data to external servers.** Captured pages, screenshots, and HTML stay on your device — this never changes.

Comparador optionally offers **Project Sync**, a feature you must explicitly configure per project, to share configuration (URLs, settings, scripts, variables — not captures or screenshots) with your team via a destination *you* choose and control: GitHub, another Git server, or a folder on disk. See [Project Sync](#project-sync) below for exactly what this does and doesn't send.

When you initiate a capture, the extension stores the following data **locally** in your browser's IndexedDB:

### Data Captured (stored locally)

- 📸 Full-page screenshots
- 📄 HTML source code
- 📋 HTTP response headers
- 🖼️ Thumbnails for navigation

This data is captured **only** from pages you explicitly choose to capture and is used solely for local comparison within the extension.

### Data NOT Collected

- ❌ Personal information (name, email, accounts)
- ❌ Browsing history or behavior
- ❌ Analytics, telemetry, or usage statistics
- ❌ Crash reports or diagnostics

Captures run in a separate browser window. Incognito mode can be enabled per project for session isolation. Custom headers and cookies can be configured for testing authenticated pages — these are user-provided values stored in project settings.

## Project Sync

Project Sync is **off by default** and only sends data if you deliberately set it up for a specific project. It exists to let a team share project configuration without manually passing files around.

- **What it sends:** project settings, URL/group structure, scripts, and custom variables. It never sends captured screenshots, HTML, headers, or logs — those always stay local.
- **Where it sends it:** only to the destination you configure — your own GitHub repository, another Git server (Bitbucket, GitLab, Gitea, self-hosted, etc.), or a folder on disk. Comparador has no server of its own and never routes data through one.
- **When it sends it:** only when you click Push/Pull, or automatically per the Pull mode you choose for that project (manual, always, or every 5/15/60 minutes) — never silently beyond what you've configured.
- **Credentials:** access tokens/passwords you provide (e.g. a GitHub PAT) are stored locally and used only to talk to the destination you configured. Project exports exclude these credentials by default — you must explicitly opt in to include them when exporting.
- **Turning it off:** disable or disconnect sync for a project at any time from its Sync page; the extension reverts to fully local, offline behavior for that project immediately.

## Permissions Explained

Comparador requires the following Chrome permissions to function:

| Permission                     | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeTab`                    | Access the currently active tab to capture its URL and content when you initiate a capture                                                                                                                                                                                                                                                                                                                                                                      |
| `tabs`                         | Create, update, and manage browser tabs for batch capture operations and navigation                                                                                                                                                                                                                                                                                                                                                                             |
| `debugger`                     | Use Chrome DevTools Protocol to capture full-page screenshots and extract complete HTML source. Only activated when you explicitly trigger a capture.                                                                                                                                                                                                                                                                                                           |
| `webRequest`                   | Intercept HTTP response headers to include them in capture comparisons                                                                                                                                                                                                                                                                                                                                                                                          |
| `offscreen`                    | Create a hidden offscreen document to run user-configured compare scripts in a CSP-sandboxed iframe. Chrome's Content Security Policy prevents dynamic script evaluation in extension pages and service workers. The offscreen document hosts a sandboxed iframe where compare scripts safely preprocess captured HTML and response headers before comparison. Only created when automatic comparison runs after a capture — no persistent background activity. |
| `host_permissions: <all_urls>` | Required to capture pages from any website, and to reach the Git/GitHub destination you configure if you enable Project Sync. Comparador is a developer tool for comparing arbitrary URLs across environments (dev, staging, production), so it cannot be limited to specific domains. Captured page data is never transmitted; Project Sync only sends what's described above, and only if you set it up.                                                                                                           |

## User Control

All extension behavior is **user-initiated** and **explicitly configured**:

- **You decide what to capture** — The extension only captures pages when you click "Capture"
- **You configure browser context** — Headers, cookies, user agent, incognito mode — all opt-in via project settings
- **You control storage** — Delete individual captures, entire projects, or uninstall to remove all data
- **No background activity** — The extension does not run, monitor, or collect anything unless you actively use it
- **No hidden behavior** — Every action is triggered by explicit user interaction. After a user-initiated capture, the extension may automatically compare the result against the baseline locally — this is a configurable per-project setting and involves no network requests beyond the original capture

## Data Storage

- **Location:** All data is stored locally in IndexedDB within your browser profile
- **Contents:** Screenshots (PNG/JPEG/WebP), HTML source, response headers, thumbnails
- **Access:** Only you can access this data through the extension
- **Deletion:** Use the extension's UI to delete captures, or uninstall the extension to remove all data

## Third-Party Services

Comparador does **not** integrate with any third-party analytics, tracking, or data collection services.

## Remote Code

The extension is designed to run entirely locally without fetching external code.

If a third-party dependency is found to unintentionally load external assets (e.g., CSS or JS from a CDN), the maintainers will address it by bundling the resource locally in a subsequent release.

## Network Requests

The extension makes network requests in two cases, both user-initiated:

1. **Capture** — to URLs you explicitly choose to capture. These requests go directly to the target website you specified, are used only to retrieve page content for local storage, and never pass through any proxy or intermediary server.
2. **Project Sync** (only if you configure it) — to the GitHub/Git/filesystem destination you set up for a project, to push/pull project configuration. See [Project Sync](#project-sync) above for exactly what is and isn't sent.

No other network requests are made.

## Open Source Components

The extension uses open-source libraries. All run locally within the extension package. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the full list and license information.

## Changes to This Policy

Any changes to this privacy policy will be reflected by updating the "Last updated" date above. Continued use of the extension after changes constitutes acceptance of the updated policy.

## Chrome Web Store Policies

This extension is designed in accordance with:
- [Chrome Web Store Developer Program Policies](https://developer.chrome.com/docs/webstore/program-policies/)
- [User Data Policy](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq/)

All captured data (screenshots, HTML, headers) is used solely for the extension's core functionality — comparing web pages — and is never transmitted externally or monetized.

## Contact

For questions about this privacy policy or the extension:

- **Tomasz Sobczyk** — [tomasz.sobczyk@vml.com](mailto:tomasz.sobczyk@vml.com)
- **Krystian Panek** — [krystian.panek@vml.com](mailto:krystian.panek@vml.com)
- **GitHub Issues** — [github.com/wttech/comparador/issues](https://github.com/wttech/comparador/issues)
