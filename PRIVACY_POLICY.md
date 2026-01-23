# Privacy Policy

**Last updated:** January 23, 2026

## Overview

Comparador is a Chrome extension for capturing and comparing web pages. This policy explains what data the extension accesses and how it's handled.

## Data Collection

**Comparador does NOT collect, transmit, or share any user data.**

All data captured by the extension (screenshots, HTML, headers) is stored **locally** in your browser's IndexedDB storage. No data is ever sent to external servers.

## Permissions Explained

Comparador requires the following Chrome permissions to function:

| Permission                     | Purpose                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `activeTab`                    | Access the currently active tab to capture its URL and content when you initiate a capture |
| `tabs`                         | Create, update, and manage browser tabs for batch capture operations and navigation        |
| `debugger`                     | Use Chrome DevTools Protocol to capture full-page screenshots and extract complete HTML source. Only activated when you explicitly trigger a capture. |
| `webRequest`                   | Intercept HTTP response headers to include them in capture comparisons                     |
| `host_permissions: <all_urls>` | Required to capture pages from any website. Comparador is a developer tool for comparing arbitrary URLs across environments (dev, staging, production), so it cannot be limited to specific domains. No data is collected or transmitted — all captures remain local. |

## User Control

- **You decide what to capture** — The extension only captures pages when you explicitly initiate a capture
- **Local storage only** — All data stays in your browser; nothing is uploaded
- **Full deletion control** — Delete individual captures, entire projects, or uninstall to remove all data
- **No background activity** — The extension does not run or collect data unless you actively use it

## Data Storage

- **Location:** All data is stored locally in IndexedDB within your browser profile
- **Contents:** Screenshots (PNG/JPEG/WebP), HTML source, response headers, thumbnails
- **Access:** Only you can access this data through the extension
- **Deletion:** Use the extension's UI to delete captures, or uninstall the extension to remove all data

## Third-Party Services

Comparador does **not** integrate with any third-party analytics, tracking, or data collection services.

## Open Source Components

The extension uses open-source libraries for functionality:
- ResembleJS for image comparison (runs locally)
- Monaco Editor for code display (runs locally)
- Ant Design for UI components (runs locally)

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for full license information.

## Changes to This Policy

If we make changes to this privacy policy, we will update the "Last updated" date above.

## Contact

For questions about this privacy policy or the extension:

- **Tomasz Sobczyk** — [tomasz.sobczyk@vml.com](mailto:tomasz.sobczyk@vml.com)
- **Krystian Panek** — [krystian.panek@vml.com](mailto:krystian.panek@vml.com)
- **GitHub Issues** — [github.com/wttech/comparador/issues](https://github.com/wttech/comparador/issues)
