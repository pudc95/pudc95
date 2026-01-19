window.addEventListener("scroll",()=>{
  const hint = document.querySelector(".scroll-hint");
  if(!hint) return;
  hint.style.opacity = window.scrollY > 60 ? "0" : "1";
});

const products = [
  {
    img:"images/earrings/1002.jpg",
    name:"Minimal Pearl Drop",
    desc:"Elegant daily design",
    tags:["Pearl","Daily","Minimal"]
  },
  {
    img:"images/earrings/1003.jpg",
    name:"Golden Halo",
    desc:"Luxury party style",
    tags:["Gold","Party"]
  },
  {
    img:"images/earrings/1004.jpg",
    name:"Crystal Moon",
    desc:"Romantic night look",
    tags:["Crystal","Romantic"]
  }
  // 👉 想加几个，加几个
];

const grid = document.getElementById("moreGrid");

products.forEach(p=>{
  const card = document.createElement("div");
  card.className = "more-card";

  card.innerHTML = `
    <img src="${p.img}">
    <div class="more-info">
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <div class="more-tags">
        ${p.tags.map(t=>`<span>${t}</span>`).join("")}
      </div>
    </div>
  `;

  grid.appendChild(card);
});

/* 滚动出现动画 */
window.addEventListener("scroll", () => {
  const more = document.querySelector(".more-products");
  if (!more) return;
  const rect = more.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    more.classList.add("active");
  }
});
