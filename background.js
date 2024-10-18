// background.js
const YOUTUBE_DOMAINS = [
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com"
];

// Cookie properties to clear
const TRACKING_COOKIES = [
  "PREF",
  "VISITOR_INFO1_LIVE",
  "YSC",
  "__Secure-YEC",
  "CONSENT",
  "LOGIN_INFO"
];

// Clear YouTube cookies before loading the page
async function clearYouTubeCookies() {
  for (const domain of YOUTUBE_DOMAINS) {
    for (const cookieName of TRACKING_COOKIES) {
      await chrome.cookies.remove({
        name: cookieName,
        url: `https://${domain}`,
      });
    }
  }
}

// Listen for YouTube navigation
chrome.webRequest.onBeforeRequest.addListener(
  async function(details) {
    if (details.type === "main_frame" && 
        YOUTUBE_DOMAINS.some(domain => details.url.includes(domain))) {
      await clearYouTubeCookies();
    }
  },
  { urls: ["*://*.youtube.com/*"] },
  ["blocking"]
);
