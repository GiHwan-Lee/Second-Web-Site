// 몇 가지 인용구와 저자를 배열에 저장합니다.
const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something.",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];

// quotes 배열에서 무작위로 인용구를 선택하기 위한 인덱스를 생성합니다.
const quotesNum = Math.floor(Math.random() * quotes.length);

// 인용구와 저자 이름을 표시할 HTML 요소를 생성합니다.
const divElement = document.createElement("div");
divElement.classList = "quotesClass";
const setQuotes = document.createElement("span");
const setAuthor = document.createElement("span");

// 생성한 HTML 요소를 문서에 추가합니다.
document.body.appendChild(divElement);
divElement.appendChild(setQuotes);
divElement.appendChild(setAuthor);

// 선택한 인용구와 저자 이름을 HTML 요소에 설정합니다.
setQuotes.innerText = `${quotes[quotesNum].quote} `;
setAuthor.innerText = quotes[quotesNum].author;
