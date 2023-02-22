import { brandsData, ctgData, heroData, productData } from "./data.js";

// ======================= NAVBAR =======================
const links = document.querySelectorAll(".links");
links.forEach((link) => {
  link.addEventListener("click", (e) => {});
});

const input = document.querySelector(".input");
const search = document.querySelector("#search");
search.addEventListener("click", () => {
  input.classList.add("active");
  search.style.fontSize = "0.8rem";
});

const pages = document.querySelector("#pages");
const hamMenu = document.querySelector("#hamMenu");
hamMenu.addEventListener("click", () => {
  pages.classList.add("active");
});

const close = document.querySelector("#close");
close.addEventListener("click", () => {
  pages.classList.remove("active");
});

// ============================= HERO ========================
function getHome() {
  const heroContent = document.querySelector(".hero");
  function renderHero() {
    heroData.forEach((data) => {
      heroContent.innerHTML += `
      <div class="heroContent">
        <img src=${data.image} alt="" />
        <div class="heroText">
          <h1 id="gender">${data.gender}</h1>
          <h1>New Season Sale</h1>
          <p>Upto 40% Off on All of our Brands</p>
          <a href=${data.link}><button>Explore</button></a>
        </div>
      </div>
      `;
    });
  }
  renderHero();

  let currentImg = 0;
  let timeOut;

  const slides = document.querySelectorAll(".heroContent");
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  function slideImage() {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${currentImg * 100}%)`;
    });

    timeOut = setTimeout(() => {
      if (currentImg >= slides.length - 1) {
        currentImg = -1;
      }
      currentImg++;
      slideImage();
    }, 3000);
  }
  slideImage();

  const leftSlide = document.querySelector("#leftSlide");
  leftSlide.addEventListener("click", () => {
    if (current < 0) {
      current = slides.length - 1;
    }
    current--;
    clearTimeout(timeOut);
    slideImage();
  });

  const rightSlide = document.querySelector("#rightSlide");
  rightSlide.addEventListener("click", () => {
    if (current > slides.length - 1) {
      current = 0;
    }
    current++;
    clearTimeout(timeOut);
    slideImage();
  });

  heroContent.addEventListener("mouseover", () => {
    clearTimeout(timeOut);
  });

  heroContent.addEventListener("mouseout", () => {
    slideImage();
  });

  // --------------------- newArrivals ---------------------------
  const nACardEl = document.querySelector(".cardsEl");
  function renderNewArrivals() {
    productData.forEach((data) => {
      if (data.id.slice(0, 2) == "NA") {
        const nACard = document.createElement("div");
        nACard.classList.add("nACard");

        const image = document.createElement("img");
        image.src = data.image;
        nACard.append(image);

        const details = document.createElement("div");
        details.classList.add("details");
        nACard.append(details);

        const h5 = document.createElement("h5");
        h5.innerText = data.brand;
        details.append(h5);

        const p = document.createElement("p");
        p.innerText = data.name;
        details.append(p);

        const rating = document.createElement("div");
        details.append(rating);

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-regular", "fa-star");
          rating.append(star);
        }

        const h3 = document.createElement("h3");
        h3.innerText = data.price;
        details.append(h3);

        const cart = document.createElement("i");
        cart.classList.add("fa-solid", "fa-cart-plus");
        rating.append(cart);
        cart.addEventListener("click", () => {
          addToCart(data.id);
        });

        const heart = document.createElement("i");
        heart.classList.add("fa-regular", "fa-heart");
        rating.append(heart);
        heart.addEventListener("click", () => {
          if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular", "fa-heart");
            heart.classList.add("fa-solid", "fa-heart");
            heart.style.color = "#f53b72";
          } else {
            heart.classList.remove("fa-solid", "fa-heart");
            heart.classList.add("fa-regular", "fa-heart");
            heart.style.color = "var(--main)";
          }
          addToWishlist(data.id);
        });

        nACardEl.append(nACard);
      }
    });
  }
  renderNewArrivals();

  // -------------------- brands --------------------
  const brands = document.querySelector(".brands");
  function renderBrands() {
    brandsData.forEach((data) => {
      brands.innerHTML += `
        <div class="logo">
          <img src="./Images/${data.src}"/>
        </div>
        `;
    });
  }
  renderBrands();

  const divEl = document.querySelectorAll(".logo");
  divEl.forEach((logo, index) => {
    logo.style.left = `${index * 6}rem`;
  });

  let current = 0;

  const slideLogo = () => {
    divEl.forEach((logo) => {
      logo.style.transform = `translateX(-${current * 6}rem)`;
    });

    setTimeout(() => {
      if (current > divEl.length) {
        current = 0;
      }
      current++;
      slideLogo();
    }, 1000);
  };
  slideLogo();

  // ---------------------- featured -----------------------------
  const fCardEl = document.querySelector(".cardsElem");
  function renderFeatured() {
    productData.forEach((data) => {
      if (data.id.slice(0, 2) == "FD") {
        const fCard = document.createElement("div");
        fCard.classList.add("card");

        const image = document.createElement("img");
        image.src = data.image;
        fCard.append(image);

        const details = document.createElement("div");
        details.classList.add("details");
        fCard.append(details);

        const h5 = document.createElement("h5");
        h5.innerText = data.brand;
        details.append(h5);

        const p = document.createElement("p");
        p.innerText = data.name;
        details.append(p);

        const rating = document.createElement("div");
        details.append(rating);

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-regular", "fa-star");
          rating.append(star);
        }

        const h3 = document.createElement("h3");
        h3.innerText = data.price;
        details.append(h3);

        const cart = document.createElement("i");
        cart.classList.add("fa-solid", "fa-cart-plus");
        rating.append(cart);
        cart.addEventListener("click", () => {
          addToCart(data.id);
        });

        const heart = document.createElement("i");
        heart.classList.add("fa-regular", "fa-heart");
        rating.append(heart);
        heart.addEventListener("click", () => {
          if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular", "fa-heart");
            heart.classList.add("fa-solid", "fa-heart");
            heart.style.color = "#f53b72";
          } else {
            heart.classList.remove("fa-solid", "fa-heart");
            heart.classList.add("fa-regular", "fa-heart");
            heart.style.color = "var(--main)";
          }
          addToWishlist(data.id);
        });

        fCardEl.append(fCard);
      }
    });
  }
  renderFeatured();

  // ----------------------- newsletter -----------------------
  const subscribe = document.querySelector("#subscribe");
  const update = document.querySelector(".update");
  subscribe.addEventListener("click", () => {
    if (email.value == "") {
      update.innerText = "Please Enter Your Email";
      update.classList.add("active");
    } else {
      update.innerText = "Thanks for Your Subscription";
      update.classList.add("active");
      email.value = "";
    }

    setTimeout(() => {
      update.classList.remove("active");
    }, 3000);
  });

  // ------------------- categories -------------------------------
  const ctgCard = document.querySelector(".ctgCard");
  function renderCategory() {
    ctgData.forEach((data) => {
      ctgCard.innerHTML += `
        <a href=${data.page}>
          <span>${data.category}</span>
          <div
            class="cCard"
            style="
              background-image: url(${data.image});">
          </div>
        </a>
      `;
    });
  }
  renderCategory();
}

// ===================== Shopping Cart ======================
function getCart() {
  const wishlistTab = document.querySelector("#wishlist");
  const wishlistPage = document.querySelector(".wishlist");
  const cartTab = document.querySelector("#cartTab");
  const cartPage = document.querySelector(".cart");

  wishlistTab.addEventListener("click", () => {
    cartTab.classList.remove("active");
    cartPage.classList.remove("active");
    wishlistTab.classList.add("active");
    wishlistPage.classList.add("active");
  });

  cartTab.addEventListener("click", () => {
    cartTab.classList.add("active");
    cartPage.classList.add("active");
    wishlistTab.classList.remove("active");
    wishlistPage.classList.remove("active");
  });

  // ---------------- Wishlist Page -------------------------
  const wCardEl = document.querySelector(".cardEl");
  function renderWishlist() {
    wishlistArray.forEach((item) => {
      const wCard = document.createElement("div");
      wCard.classList.add("wCard");

      const image = document.createElement("img");
      image.src = item.image;
      wCard.append(image);

      const details = document.createElement("div");
      details.classList.add("details");
      wCard.append(details);

      const h5 = document.createElement("h5");
      h5.innerText = item.brand;
      details.append(h5);

      const p = document.createElement("p");
      p.innerText = item.name;
      details.append(p);

      const rating = document.createElement("div");
      details.append(rating);
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.classList.add("fa-regular", "fa-star");
        rating.append(star);
      }

      const h3 = document.createElement("h3");
      h3.innerText = item.price;
      details.append(h3);

      const cart = document.createElement("i");
      cart.classList.add("fa-solid", "fa-cart-plus");
      details.append(cart);
      cart.addEventListener("click", () => {
        addToCart(item.id);
        removeFromWishlist(item.id);
        remove.parentElement.parentElement.remove();
      });

      const remove = document.createElement("i");
      remove.classList.add("fa-solid", "fa-xmark");
      details.append(remove);
      remove.addEventListener("click", () => {
        removeFromWishlist(item.id);
        remove.parentElement.parentElement.remove();
      });

      wCardEl.append(wCard);
    });
  }
  renderWishlist();

  // ---------------------- Cart Page ---------------------
  const tableContent = document.querySelector("#tableContent");
  function renderCart() {
    cartArray.forEach((item) => {
      const tbody = document.createElement("tbody");
      tbody.classList.add("prodDetails");

      const tr = document.createElement("tr");
      tbody.append(tr);

      const tdImage = document.createElement("td");
      tr.append(tdImage);

      const image = document.createElement("img");
      image.src = item.image;
      tdImage.append(image);

      const tdName = document.createElement("td");
      tr.append(tdName);

      const p = document.createElement("p");
      p.innerText = item.name;
      tdName.append(p);

      const span = document.createElement("span");
      span.innerText = `Size: ${item.size} 
       Color: ${item.color}`;
      tdName.append(span);

      const tdPrice = document.createElement("td");
      tdPrice.classList.add("perPrice");
      tdPrice.innerText = item.price;
      tr.append(tdPrice);

      const tdQuantity = document.createElement("td");
      tdQuantity.classList.add("quantity");
      tr.append(tdQuantity);

      const Minus = document.createElement("i");
      Minus.classList.add("fa-solid", "fa-minus");
      tdQuantity.append(Minus);
      Minus.addEventListener("click", () => {
        changeItemQty("minus", item.id);
      });

      const itemQnt = document.createElement("span");
      itemQnt.classList.add("itemQuantity");
      itemQnt.innerText = changeItemQty();
      itemQnt.innerText = item.itemQuantity;
      tdQuantity.append(itemQnt);

      const Plus = document.createElement("i");
      Plus.classList.add("fa-solid", "fa-plus");
      tdQuantity.append(Plus);
      Plus.addEventListener("click", () => {
        changeItemQty("plus", item.id);
      });

      const tdTotal = document.createElement("td");
      tdTotal.classList.add("totalPrice");
      tdTotal.innerText = item.price;
      tr.append(tdTotal);

      const tdRemove = document.createElement("td");
      tr.append(tdRemove);

      const Remove = document.createElement("i");
      Remove.classList.add("fa-solid", "fa-xmark");
      tdRemove.append(Remove);

      Remove.addEventListener("click", () => {
        removeFromCart(item.id);
        Remove.parentElement.parentElement.parentElement.remove();
      });

      tableContent.append(tbody);
    });

    const itemQnt = document.querySelector(".itemQuantity");
    const tPrice = document.querySelector(".totalPrice");

    function changeItemQty(action, id) {
      cartArray = cartArray.map((item) => {
        let itemQuantity = item.itemQuantity;
        if (item.id === id) {
          if (action === "minus") {
            if (itemQnt.innerText <= 0) {
              return;
            } else {
              itemQnt.innerText = itemQuantity--;
              tPrice.innerText = `$${
                item.price.slice(1, item.price.length) * itemQnt.innerText
              }`;
            }
          } else if (action === "plus") {
            itemQnt.innerText = itemQuantity++;
            tPrice.innerText = `$${
              item.price.slice(1, item.price.length) * itemQnt.innerText
            }`;
          }
        }
        return { ...item, itemQuantity };
      });
    }
  }
  renderCart();

  function removeFromCart(id) {
    const item = productData.find((product) => product.id === id);
    if (cartArray.some((item) => item.id === id)) {
      cartArray.splice(item, 1);
      updateLS();
    }
  }

  function removeFromWishlist(id) {
    const item = productData.find((product) => product.id === id);
    if (wishlistArray.some((item) => item.id === id)) {
      wishlistArray.splice(item, 1);
      updateWL();
    }
  }
}

// ================== Mens Page ===========================
function getMens() {
  const mCardEl = document.querySelector(".cardsEl");
  function renderMens() {
    productData.forEach((data) => {
      if (data.for === "men") {
        const mCard = document.createElement("div");
        mCard.classList.add("card");

        const image = document.createElement("img");
        image.src = data.image;
        mCard.append(image);

        const details = document.createElement("div");
        details.classList.add("details");
        mCard.append(details);

        const h5 = document.createElement("h5");
        h5.innerText = data.brand;
        details.append(h5);

        const p = document.createElement("p");
        p.innerText = data.name;
        details.append(p);

        const rating = document.createElement("div");
        details.append(rating);

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-regular", "fa-star");
          rating.append(star);
        }

        const h3 = document.createElement("h3");
        h3.innerText = data.price;
        details.append(h3);

        const cart = document.createElement("i");
        cart.classList.add("fa-solid", "fa-cart-plus");
        rating.append(cart);
        cart.addEventListener("click", () => {
          addToCart(data.id);
        });

        const heart = document.createElement("i");
        heart.classList.add("fa-regular", "fa-heart");
        rating.append(heart);
        heart.addEventListener("click", () => {
          if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular", "fa-heart");
            heart.classList.add("fa-solid", "fa-heart");
            heart.style.color = "#f53b72";
          } else {
            heart.classList.remove("fa-solid", "fa-heart");
            heart.classList.add("fa-regular", "fa-heart");
            heart.style.color = "var(--main)";
          }
          addToWishlist(data.id);
        });

        mCardEl.append(mCard);
      }
    });
  }
  renderMens();
}

// ==================== Women Page ====================
function getWomen() {
  const mCardEl = document.querySelector(".cardsEl");
  function renderWomen() {
    productData.forEach((data) => {
      if (data.for === "women") {
        const mCard = document.createElement("div");
        mCard.classList.add("card");

        const image = document.createElement("img");
        image.src = data.image;
        mCard.append(image);

        const details = document.createElement("div");
        details.classList.add("details");
        mCard.append(details);

        const h5 = document.createElement("h5");
        h5.innerText = data.brand;
        details.append(h5);

        const p = document.createElement("p");
        p.innerText = data.name;
        details.append(p);

        const rating = document.createElement("div");
        details.append(rating);

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-regular", "fa-star");
          rating.append(star);
        }

        const h3 = document.createElement("h3");
        h3.innerText = data.price;
        details.append(h3);

        const cart = document.createElement("i");
        cart.classList.add("fa-solid", "fa-cart-plus");
        rating.append(cart);
        cart.addEventListener("click", () => {
          addToCart(data.id);
        });

        const heart = document.createElement("i");
        heart.classList.add("fa-regular", "fa-heart");
        rating.append(heart);
        heart.addEventListener("click", () => {
          if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular", "fa-heart");
            heart.classList.add("fa-solid", "fa-heart");
            heart.style.color = "#f53b72";
          } else {
            heart.classList.remove("fa-solid", "fa-heart");
            heart.classList.add("fa-regular", "fa-heart");
            heart.style.color = "var(--main)";
          }
          addToWishlist(data.id);
        });

        mCardEl.append(mCard);
      }
    });
  }
  renderWomen();
}

// ===================== Kids Page ====================
function getKids() {
  const mCardEl = document.querySelector(".cardsEl");
  function renderKids() {
    productData.forEach((data) => {
      if (data.for === "kids") {
        const mCard = document.createElement("div");
        mCard.classList.add("card");

        const image = document.createElement("img");
        image.src = data.image;
        mCard.append(image);

        const details = document.createElement("div");
        details.classList.add("details");
        mCard.append(details);

        const h5 = document.createElement("h5");
        h5.innerText = data.brand;
        details.append(h5);

        const p = document.createElement("p");
        p.innerText = data.name;
        details.append(p);

        const rating = document.createElement("div");
        details.append(rating);

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-regular", "fa-star");
          rating.append(star);
        }

        const h3 = document.createElement("h3");
        h3.innerText = data.price;
        details.append(h3);

        const cart = document.createElement("i");
        cart.classList.add("fa-solid", "fa-cart-plus");
        rating.append(cart);
        cart.addEventListener("click", () => {
          addToCart(data.id);
        });

        const heart = document.createElement("i");
        heart.classList.add("fa-regular", "fa-heart");
        rating.append(heart);
        heart.addEventListener("click", () => {
          if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular", "fa-heart");
            heart.classList.add("fa-solid", "fa-heart");
            heart.style.color = "#f53b72";
          } else {
            heart.classList.remove("fa-solid", "fa-heart");
            heart.classList.add("fa-regular", "fa-heart");
            heart.style.color = "var(--main)";
          }
          addToWishlist(data.id);
        });

        mCardEl.append(mCard);
      }
    });
  }
  renderKids();
}

// ==========================================================
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  if (cartArray.some((item) => item.id === id)) {
    alert("Already Added");
  } else {
    const item = productData.find((product) => product.id === id);
    cartArray.push({
      ...item,
      itemQuantity: 1,
    });
    updateLS();
  }
}

function updateLS() {
  localStorage.setItem("cart", JSON.stringify(cartArray));
}

let wishlistArray = JSON.parse(localStorage.getItem("liked")) || [];

function addToWishlist(id) {
  if (wishlistArray.some((item) => item.id === id)) {
    alert("Already Added");
  } else {
    const item = productData.find((product) => product.id === id);
    wishlistArray.push({
      ...item,
    });
    updateWL();
  }
}

function updateWL() {
  localStorage.setItem("liked", JSON.stringify(wishlistArray));
}

// ========================= DOM =============================
document.addEventListener("click", (e) => {
  if (e.target !== input && e.target !== search) {
    input.value = "";
    input.classList.remove("active");
    search.style.fontSize = "1.1rem";
  }

  if (e.target !== pages && e.target !== hamMenu) {
    pages.classList.remove("active");
  }
});

// =============== Indiv Script ==============================
const getPageScript = () => {
  let pageName = document.body.id;
  switch (pageName) {
    case "homePage":
      getHome();
      break;
    case "cartPage":
      getCart();
      break;
    case "mensPage":
      getMens();
      break;
    case "womenPage":
      getWomen();
      break;
    case "kidsPage":
      getKids();
      break;
  }
};
getPageScript();
