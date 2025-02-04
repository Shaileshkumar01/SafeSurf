document.getElementById("checkPage").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    document.getElementById("result").textContent = `Checking: ${url}`;
    setTimeout(() => {
      if (url.includes("phishing")) {
        document.getElementById("result").textContent = "Warning: Phishing risk detected!";
      } else {
        document.getElementById("result").textContent = "This page looks safe.";
      }
    }, 1000);
  });
});
