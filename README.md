# YouTube Fresh Mode Extension

This Chrome extension automatically opens YouTube in a "fresh" state by clearing personalization and tracking cookies before loading any YouTube page. This helps in avoiding personalized recommendations and distractions, offering a cleaner browsing experience.

## Features

- **Automatic Cookie Clearing**: The extension clears specific tracking cookies (like `PREF`, `VISITOR_INFO1_LIVE`, etc.) before loading YouTube.
- **Distraction-Free Browsing**: Enjoy YouTube without personalized recommendations.
- **Simple Interface**: A popup showing the extension's status with no user interaction required.

## How it Works

1. **Cookie Removal**: It clears tracking and personalization cookies before any YouTube page loads, ensuring the site is opened in a clean, unpersonalized state.
2. **Background Script**: Monitors requests to YouTube and automatically clears relevant cookies.
3. **Manifest v3**: Built with the latest Chrome Extensions API using Manifest Version 3.

## Installation

To use this extension in Chrome:

1. Clone or download this repository:
    ```bash
    git clone https://github.com/taiyebnirjhar/youtube-fresh-mode.git
    ```

2. Open Chrome and go to `chrome://extensions/`.

3. Enable **Developer mode** in the top right corner.

4. Click **Load unpacked** and select the cloned directory.

5. The extension is now installed and ready to use!

## File Structure

The repository contains the following files:

- `background.js`: Background script for clearing YouTube cookies.
- `manifest.json`: Extension metadata and permissions.
- `popup.html`: Simple popup interface showing extension status.
- `icon48.png`: 48x48 icon for the extension (add your own).
- `icon128.png`: 128x128 icon for the extension (add your own).

- ## Permissions

The extension requests the following permissions:
- `webRequest`: To intercept requests to YouTube and clear cookies.
- `cookies`: To access and remove specific cookies for YouTube.
- `storage`: (Optional) If needed for future configurations.
- Host permissions for `*.youtube.com/*`: To ensure the extension works across all YouTube subdomains.

## Customization

You can add or modify the list of tracking cookies in the `background.js` file. The following cookies are currently cleared:

```javascript
const TRACKING_COOKIES = [
  "PREF",
  "VISITOR_INFO1_LIVE",
  "YSC",
  "__Secure-YEC",
  "CONSENT",
  "LOGIN_INFO"
];
