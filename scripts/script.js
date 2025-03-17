function goPages(name) {
    window.location.href = name;
}

const hash = window.location.hash;
if (hash) {
  const element = document.querySelector(hash);
  if (element) {
    // Cuộn mượt
    element.scrollIntoView({ behavior: "smooth" });
  }
}
