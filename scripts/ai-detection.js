function detectPhishing(url) {
    // Simulate AI detection logic
    const phishingKeywords = ["login", "password", "bank", "paypal"];
    return phishingKeywords.some((keyword) => url.includes(keyword));
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "detectPhishing") {
      const isPhishing = detectPhishing(request.url);
      sendResponse({ isPhishing });
    }
  });