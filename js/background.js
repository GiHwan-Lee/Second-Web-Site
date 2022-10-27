const images = [
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const container = document.querySelector("#container");
container.appendChild(bgImage);

bgImage.id = "background-img";

bgImage.src = `${randomImg}`;
