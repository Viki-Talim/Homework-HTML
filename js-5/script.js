fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const productsContainer = document.getElementById("products-list");
    res.forEach((product) => {
      productsContainer.innerHTML += `<div class="product-card">
                <h3>${product.title}</h3>
                <p>price: ${product.price}</p>
                <p>category: ${product.category}</p></div>`;
    });
  })
  .catch((error) => console.log("An error occurred", error))
  .finally(() => console.log("The request is over!"));

const poraki = [
  "Great Discounts!",
  "Super prices today!",
  "Check out our new collection!",
  "Free shipping on all orders!",
];
let index = 0;
setInterval(() => {
  const naslov = document.getElementById("naslov");
  index++;
  if (index >= poraki.length) {
    index = 0;
  }
  naslov.textContent = poraki[index];
  naslov.style.color = index % 2 === 0 ? "darkblue" : "black";
}, 3000);
const contentElements = document.querySelectorAll(".content");
console.log(contentElements);
contentElements.forEach((contentElement) => {
  contentElement.style.color = "black";
  contentElement.style.padding = "16px 22px";
  contentElement.style.background = "lightgrey";
  contentElement.style.color = "cadetblue";
  contentElement.style.cursor = "pointer";
});
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((pElement) => {
  pElement.style.fontFamily = "Arial, sans-serif";
  pElement.style.color = "lightblue";
  pElement.style.padding = "16px 22px";
});
const btn = document.querySelector("button");

btn.style.padding = "6px 10px";
btn.style.borderRadius = "6px";
btn.style.color = "black";
btn.style.backgroundColor = "cadetblue";
btn.style.cursor = "pointer";

const darkModeButton = document.getElementById("dark-mode");
setTimeout(() => {
  darkModeButton.style.backgroundColor = "black";
  darkModeButton.style.color = "white";
  darkModeButton.textContent = " Dark Mode!";
  console.log("The color will change after five seconds.");
}, 5000);
const bodyElement = document.body;

darkModeButton.addEventListener("click", function () {
  const odobreno = confirm("Do you want to change to dark mode?");

  if (odobreno) {
    bodyElement.classList.toggle("dark-mode");

    if (bodyElement.classList.contains("dark-mode")) {
      darkModeButton.textContent = "Light Mode";
      alert("Dark Mode is on!");
    } else {
      darkModeButton.textContent = "Dark Mode";
      alert("Dark Mode is off!");
    }
  } else {
    alert("Dark Mode cancelled");
  }
});
darkModeButton.addEventListener("mouseover", function () {
  darkModeButton.style.backgroundColor = "darkgrey";
  darkModeButton.style.color = "white";
});

darkModeButton.addEventListener("mouseleave", function () {
  darkModeButton.style.backgroundColor = "cadetblue";
});
