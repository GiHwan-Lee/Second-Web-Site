// 이미지 파일 경로를 저장하는 배열
const images = [
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
];
// images 배열에서 무작위로 하나의 이미지를 선택
const randomImg = images[Math.floor(Math.random() * images.length)];

// 새로운 img 요소를 생성
const bgImage = document.createElement("img");

// container 요소를 선택
const container = document.querySelector("#container");

// bgImage 요소를 container 요소에 추가
container.appendChild(bgImage);

// bgImage 요소의 id를 설정
bgImage.id = "background-img";

// bgImage 요소의 src 속성을 무작위로 선택된 이미지의 경로로 설정
bgImage.src = `${randomImg}`;
