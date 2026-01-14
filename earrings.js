const productDB = [
  {
    id: 1001,
    name: "Crystal Drop Earrings",
    style: "vintage",
    material: "silver",
    img: "images/earrings/1001.jpg",
    desc: "Handmade crystal earrings with elegant silver hooks."
  },
  {
    id: 1002,
    name: "Minimal Pearl Earrings",
    style: "minimal",
    material: "gold",
    img: "images/earrings/1002.jpg",
    desc: "Minimalist pearl earrings with 18K gold finish."
  },
  {
    id: 1003,
    name: "Classic Hoop Earrings",
    style: "classic",
    material: "gold",
    img: "images/earrings/1003.jpg",
    desc: "Classic hoop earrings for everyday elegance."
  }
];

let currentProduct = productDB[0];

function renderProduct(p){
  document.querySelector(".product-image img").src = p.img;
  document.querySelector(".product-info h2").innerText = p.name;
  document.querySelector(".product-desc").innerText = p.desc;
}

function renderMoreProducts(){
  const container = document.querySelector(".more-grid");
  container.innerHTML = "";

  productDB.forEach((p,i)=>{
    const card = document.createElement("div");
    card.className = "more-card";
    card.style.animationDelay = `${i*0.08}s`;

    card.innerHTML = `
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded",()=>{

  renderProduct(currentProduct);
  renderMoreProducts();

  document.querySelector(".action-btn.material").onclick = () => {
    const sameStyle = productDB.filter(p =>
      p.material !== currentProduct.material &&
      p.style === currentProduct.style
    );
    if(!sameStyle.length) return;
    currentProduct = sameStyle[Math.floor(Math.random()*sameStyle.length)];
    renderProduct(currentProduct);
  };

  document.querySelector(".action-btn.style").onclick = () => {
    const diffStyle = productDB.filter(p => p.style !== currentProduct.style);
    if(!diffStyle.length) return;
    currentProduct = diffStyle[Math.floor(Math.random()*diffStyle.length)];
    renderProduct(currentProduct);
  };

  /* ===== Scroll Hint 断点吸附逻辑 ===== */
let snapTop = document.querySelector(".product-hero").offsetTop - 120;
let isSnapping = false;

  const hint = document.querySelector(".scroll-hint");
  const more = document.querySelector(".more-products");
  let locked = true;

  window.addEventListener("scroll",()=>{
    const rect = hint.getBoundingClientRect();

if(rect.top > window.innerHeight * 0.65 && !isSnapping){
  isSnapping = true;
  window.scrollTo({ top: snapTop, behavior: "smooth" });
  setTimeout(()=> isSnapping=false, 600);
}

    if(window.scrollY < more.offsetTop-300){
      locked = true;
      more.classList.remove("active");
    }
  });
if(window.scrollY < snapTop + 40 && !locked){
  locked = true;
  more.classList.remove("active");
  isSnapping = true;
  window.scrollTo({ top: snapTop, behavior: "smooth" });
  setTimeout(()=> isSnapping=false, 600);
}

});
