function isPasswordStrong(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkPassword") {
      const isStrong = isPasswordStrong(request.password);
      sendResponse({ isStrong });
    }
  });