import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", (event) => {
  event.target.style.cursor = "pointer";
  event.target.style.color = "#FE5735";
});

h1.addEventListener("mouseout", (event) => {
  event.target.style.color = "";
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#347589";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.textContent === "Anasayfa") {
      window.location.href = "https://www.google.com";
    } else if (link.textContent === "Hakkımızda") {
      window.location.href = "https://workintech.com.tr/";
    }
  });
});
