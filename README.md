<p align="center">
  <img src="assets/logo.png" width="640" alt="Comparador">
</p>

---

## Overview

Comparador helps developers detect visual and functional differences between website environments (dev, stage, production) by comparing:

- 📸 **Fullscreen screenshots** with visual diff highlighting
- 📄 **HTML source code** with side-by-side comparison
- 📋 **Response headers** differences

### Screenshots

#### 1. Organize URLs by project
> Group your pages into projects and categories for easy management

![Organize URLs](https://placehold.co/640x320/1a1a2e/ffffff?text=Organize+URLs)
<!-- Replace with: doc/step-1-organize.png -->

#### 2. Capture pages across environments
> Run batch captures with custom scripts and browser settings

![Capture pages](https://placehold.co/640x320/16213e/ffffff?text=Capture+Pages)
<!-- Replace with: doc/step-2-capture.png -->

#### 3. Compare screenshots visually
> Pixel-perfect diff with mismatch percentage and dimension tracking

![Compare screenshots](https://placehold.co/640x320/0f3460/ffffff?text=Compare+Screenshots)
<!-- Replace with: doc/step-3-screenshot-diff.png -->

#### 4. Dive into HTML changes
> Side-by-side code diff with syntax highlighting

![Compare HTML](https://placehold.co/640x320/533483/ffffff?text=Compare+HTML)
<!-- Replace with: doc/step-4-html-diff.png -->

#### 5. Review headers & fine-tune settings
> Compare response headers and adjust comparison thresholds

![Settings](https://placehold.co/640x320/e94560/ffffff?text=Settings)
<!-- Replace with: doc/step-5-settings.png -->

## Installation

### Chrome Web Store (Recommended)

Install directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/comparador).

### From Release (Manual)

1. Download the `comparador-*.zip` file from [Releases](../../releases)
2. Extract the ZIP file
3. Open `chrome://extensions/`
4. Enable **Developer mode** (toggle in top-right)
5. Click **Load unpacked** and select the extracted folder

## Features

- **Multi-environment comparison** — Compare dev, staging, and production side by side
- **Full-page screenshots** — Capture entire pages, not just the viewport
- **Visual diff** — Highlight pixel-level differences between screenshots
- **HTML diff** — Monaco-powered side-by-side code comparison
- **Headers diff** — Compare response headers between environments
- **Batch capture** — Capture multiple URLs in one session
- **Project organization** — Group URLs by project and category
- **Scriptable capture** — Run custom JavaScript before capturing
- **Browser context** — Set headers, cookies, user agent, and more

## Permissions

Comparador requires the following permissions to function:

| Permission | Purpose |
|------------|---------|
| `activeTab` | Access the currently active tab to capture its URL and content |
| `tabs` | Create and manage browser tabs for batch capture operations |
| `debugger` | Use Chrome DevTools Protocol to capture full-page screenshots and extract HTML |
| `webRequest` | Intercept HTTP response headers for comparison |
| `host_permissions` | Capture pages from any website you choose to compare |

**Privacy:** All data is stored locally in your browser. Nothing is sent to external servers. See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## Mock Server

This repository includes a local HTTPS mock server for testing Comparador across multiple simulated environments.

<!-- TODO: Add mock screenshot -->
<!-- <p><img src="doc/mock-website.png" width="640"/></p> -->

### Quick Start

```bash
cd mock
npm install
npm run setup   # One-time: generate certs, add hosts, trust CA (requires sudo)
npm start       # Start the server
```

### Using with Comparador

Once the mock server is running and Comparador is installed:

1. **Create a new project** in Comparador (e.g., "Acme")
2. **Uncomment the environments and paths** in the "Variables for Scripts" section

That's it! New projects come pre-configured to target the mock server environments. This also serves as a reference for how to properly configure Comparador for your real-world projects.

### Environments

| Environment | URL                      |
| ----------- | ------------------------ |
| Development | https://dev.acme.local   |
| Staging     | https://stage.acme.local |
| Production  | https://www.acme.local   |

### Pages

- `/` — Home page
- `/about` — About page
- `/products` — Products page

Each environment has slightly different content to demonstrate Comparador's diff capabilities.

### Setup Details

The setup script:
1. Generates self-signed SSL certificates
2. Adds entries to `/etc/hosts` for the local domains
3. Trusts the CA certificate in macOS Keychain (requires sudo)

### Customization

Edit files in `mock/config/` to customize:
- `environments.ts` — Define environment domains and ports
- `routes.ts` — Define available routes/pages
- `data.ts` — Environment-specific content

## Authors

- **Krystian Panek** — Founder & Maintainer — [krystian.panek@vml.com](mailto:krystian.panek@vml.com)
- **Tomasz Sobczyk** — Consultancy — [tomasz.sobczyk@vml.com](mailto:tomasz.sobczyk@vml.com)

## License

| Component                                     | License                              |
| --------------------------------------------- | ------------------------------------ |
| This repository (mock server, docs, examples) | [MIT](LICENSE)                       |
| Chrome Extension                              | [Freeware](assets/EXTENSION-LICENSE) |

See also: [Privacy Policy](PRIVACY_POLICY.md) · [Third-Party Notices](THIRD_PARTY_NOTICES.md)

**Contributions welcome!** The mock server and documentation are open source under MIT.
