window.addEventListener("scroll", () => {
  const more = document.querySelector(".more-products");
  if (!more) return;

  const rect = more.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    more.classList.add("active");
  }
});
