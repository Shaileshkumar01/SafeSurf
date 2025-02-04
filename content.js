document.querySelectorAll('input[type="password"]').forEach((input) => {
  input.addEventListener("input", (e) => {
    const password = e.target.value;
    if (password.length < 8) {
      alert("Your password is too weak! Use at least 8 characters.");
    }
  });
});

if (window.location.protocol === "http:") {
  const warning = document.createElement("div");
  warning.className = "warning-banner";
  warning.textContent = "Warning: This website is not secure (HTTP).";
  document.body.prepend(warning);
}