chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url;
    if (url.includes("phishing")) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "assets/icons/icon48.png",
        title: "Phishing Alert!",
        message: "This website may be a phishing attempt. Proceed with caution.",
      });
    }
  },
  { urls: ["<all_urls>"] }
);

chrome.runtime.onInstalled.addListener(() => {
  console.log("Secure Student Browsing extension installed!");
});