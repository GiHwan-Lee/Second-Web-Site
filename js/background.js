const images = [
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
document.body.appendChild(bgImage);

bgImage.id = "a";

document.getElementById("a").width = "1000";

bgImage.src = `${randomImg}`;
