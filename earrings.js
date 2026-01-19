document.addEventListener("DOMContentLoaded", () => {

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
    },
    {
      img:"images/earrings/1005.jpg",
      name:"Silver Leaf",
      desc:"Light minimalist",
      tags:["Silver","Minimal"]
    }
  ];

  const grid = document.getElementById("moreGrid");

  products.forEach((p,i)=>{
    const card = document.createElement("div");
    card.className = "more-card";
    card.style.transitionDelay = `${i * 0.12}s`;

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

  /* IntersectionObserver */
  const observer = new IntersectionObserver(
    entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("active");
        }
      });
    },
    { threshold:0.15 }
  );

  document.querySelectorAll(".more-card").forEach(card=>{
    observer.observe(card);
  });

});

const detail = document.getElementById("productDetail");
const dImg = document.getElementById("detailImg");
const dTitle = document.getElementById("detailTitle");
const dDesc = document.getElementById("detailDesc");
const dTags = document.getElementById("detailTags");

grid.addEventListener("click", e=>{
  const card = e.target.closest(".more-card");
  if(!card) return;

  dImg.src = card.querySelector("img").src;
  dTitle.textContent = card.querySelector("h4").textContent;
  dDesc.textContent = card.querySelector("p").textContent;

  dTags.innerHTML = card.querySelector(".more-tags").innerHTML;

  detail.classList.add("active");
});

document.querySelector(".detail-close").onclick = ()=>{
  detail.classList.remove("active");
};
