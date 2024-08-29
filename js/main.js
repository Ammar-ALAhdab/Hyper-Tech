// Main Variables
let imgPath = "all";
let imgsContainer = document.querySelector(".proudcts-section .row");
let imgsOffersContainer = document.querySelector(".offers-section .card-wrapper");
let navCategories = Array.from(document.querySelectorAll(".lower-nav .dropdown-menu li"));
let btnsCategories = [
  ...document.querySelectorAll(".proudcts-section .icons button img"),
  document.querySelectorAll(".proudcts-section .icons button")[0],
  document.querySelectorAll(".proudcts-section .icons button")[6],
];

// Trigger The Generate Functions By Default
generateImgs();

// Trigger The Generate Functions By Nav's Categories Links
navCategories.forEach((li) => {
  li.addEventListener("click", productSort);
});

// Trigger The Generate Functions By Porducts Section Buttons
btnsCategories.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    productSort(e);
    btnsCategories.forEach((btn) => {
      btn.classList.remove("active");
      btn.parentElement.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    e.currentTarget.parentElement.classList.add("active");
  });
});

// Products Fillter Function
function productSort(e) {
  switch (e.target.dataset.sort) {
    case "all":
      imgPath = "all";
      generateImgs();
      break;
    case "mob":
      imgPath = "mob";
      generateImgs();
      break;
    case "lap":
      imgPath = "lap";
      generateImgs();
      break;
    case "com":
      imgPath = "com";
      generateImgs();
      break;
    case "cam":
      imgPath = "cam";
      generateImgs();
      break;
    case "tv":
      imgPath = "tv";
      generateImgs();
      break;
    case "acc":
      imgPath = "acc";
      generateImgs();
      break;
  }
}

// Generate Crads Prodcuts Function
function generateImgs() {
  fetch("api/img.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      imgsContainer.innerHTML = "";
      for (let i = 1; i <= data[imgPath].length; i++) {
        let { brandName: brandName, price: price, discount: discount, url: url, rate: rate } = data[imgPath][i - 1];
        let box = `<div class="col-sm-6 col-md-4 col-lg-3">
  <div class="card prod">
    <span class="see hover-span"><i class="fa fa-eye"></i></span>
    <span class="cart hover-span"><i class="fa fa-shopping-cart"></i></span>
    <span class="favorite hover-span"><i class="fa fa-heart"></i></span>
    <div class="img-container">
      <img src="${url}${i > 9 ? "" : "0"}${i}.jpg" width="216" height="216" alt="" />
    </div>
      <div class="content">
        <h3 class="brand-name">${brandName}</h3>
        <div class="discount-rate my-3 py-2">
          <span class="rate d-inline-block">
            <i class="fa fa-star ${rate >= 1 ? "active" : ""}"></i>
            <i class="fa fa-star ${rate >= 2 ? "active" : ""}"></i>
            <i class="fa fa-star ${rate >= 3 ? "active" : ""}"></i>
            <i class="fa fa-star ${rate >= 4 ? "active" : ""}"></i>
            <i class="fa fa-star ${rate >= 5 ? "active" : ""}"></i>
          </span>
          <span class="discount d-inline-block"><strong>$${Math.floor(price - price * (discount / 100))} </strong>
          <span class="actual-price"><strike>$${price}</strike></span></span>
        </div>
        <button class="buy">Add To Cart</button>
      </div>
  </div>
  </div>`;
        imgsContainer.innerHTML += box;
      }
    });
}

// Swiper Js
const swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 20,
  // slidesPerGroup: 3,
  loop: true,
  // loopFillGroupWithBlank: true,
  centerSlide: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

// START: Animate The Testimonials Section
let testimonialsSection = document.querySelector(".testimonials");
let boxTestimonial = document.querySelectorAll(".box-testimonial");
window.addEventListener("scroll", (e) => {
  // ----- Show The Boxes
  // If The Screen Is Larger Than Mobile Screen
  if (this.scrollY >= testimonialsSection.offsetTop - 300) {
    if (window.innerWidth > 576) {
      boxTestimonial.forEach((box, key) => {
        if (key % 2 != 0) box.style.top = "0";
        else box.style.bottom = "0";
      });
    }
    // If The Screen Is Mobile Screen
    else {
      boxTestimonial.forEach((box, key) => {
        if (key % 2 != 0) box.style.left = "0";
        else box.style.right = "0";
      });
    }
    // ----- Hide The Boxes
  } else {
    // If The Screen Is Larger Than Mobile Screen
    if (window.innerWidth > 576) {
      boxTestimonial.forEach((box, key) => {
        if (key % 2 != 0) {
          box.style.top = "-300%";
          box.style.left = "0";
        } else {
          box.style.bottom = "-300%";
          box.style.right = "0";
        }
      });
    }
    // If The Screen Is Mobile Screen
    else {
      boxTestimonial.forEach((box, key) => {
        if (key % 2 != 0) {
          box.style.left = "-300%";
          box.style.top = "0";
        } else {
          box.style.right = "-300%";
          box.style.bottom = "0";
        }
      });
    }
  }
});
// END