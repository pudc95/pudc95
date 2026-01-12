const productDB = [
  {
    id: 1001,
    name: "Crystal Drop Earrings",
    style: "vintage",
    material: "silver",
    price: 129,
    img: "images/earrings/1001.jpg",
    desc: "Handmade crystal earrings with elegant silver hooks."
  },
  {
    id: 1002,
    name: "Minimal Pearl Earrings",
    style: "minimal",
    material: "gold",
    price: 199,
    img: "images/earrings/1002.jpg",
    desc: "Minimalist pearl earrings with 18K gold finish."
  },
  {
    id: 1003,
    name: "Classic Hoop Earrings",
    style: "classic",
    material: "gold",
    price: 169,
    img: "images/earrings/1003.jpg",
    desc: "Classic hoop earrings for everyday elegance."
  }
];

let currentProduct = productDB[0];

function renderProduct(p){
  document.querySelector(".product-image img").src = p.img;
  document.querySelector(".product-info h2").innerText = p.name;
  document.querySelector(".product-desc").innerText = p.desc;
  document.querySelector(".price-value").innerText = "¥" + p.price;
}

document.addEventListener("DOMContentLoaded",()=>{

  renderProduct(currentProduct);

  document.querySelector(".price-plus").onclick = () => {
    const higher = productDB.filter(p => p.price > currentProduct.price);
    if(!higher.length) return alert("No higher priced product.");
    currentProduct = higher[Math.floor(Math.random()*higher.length)];
    renderProduct(currentProduct);
  };

  document.querySelector(".price-minus").onclick = () => {
    const lower = productDB.filter(p => p.price < currentProduct.price);
    if(!lower.length) return alert("No lower priced product.");
    currentProduct = lower[Math.floor(Math.random()*lower.length)];
    renderProduct(currentProduct);
  };

  document.querySelector(".action-btn.material").onclick = () => {
    const sameStyle = productDB.filter(p =>
      p.material !== currentProduct.material &&
      p.style === currentProduct.style
    );
    if(!sameStyle.length) return alert("No more materials.");
    currentProduct = sameStyle[Math.floor(Math.random()*sameStyle.length)];
    renderProduct(currentProduct);
  };

  document.querySelector(".action-btn.style").onclick = () => {
    const diffStyle = productDB.filter(p => p.style !== currentProduct.style);
    if(!diffStyle.length) return alert("No more styles.");
    currentProduct = diffStyle[Math.floor(Math.random()*diffStyle.length)];
    renderProduct(currentProduct);
  };

});
