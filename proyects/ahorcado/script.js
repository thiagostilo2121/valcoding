function copyCode() {
    const code = document.querySelector("code");
    navigator.clipboard.writeText(code.textContent)
       .then(() => alert("OK!"))
       .catch(() => alert("NO!"))
}