import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const users = [
  {
    name: "Марина",
    sername: "Лихолетова",
    hw: "36",
    points: [100, 90, 95, 100],
    img: "https://lms.ithillel.ua/uploads/images/2519ab52ca03245272dbdc09df2b8393.jpg?width=100&height=100",
  },
  {
    name: "Николай",
    sername: "Трафименков",
    hw: "36",
    points: [95, 80, 99, 100],
    img: "https://lms.ithillel.ua/assets/images/userpic.jpg",
  },
  {
    name: "Павел",
    sername: "Черняков",
    hw: "35",
    points: [93, 91, 100, 99],
    img: "https://lms.ithillel.ua/uploads/images/2dba89e3a2dc15a5352922664836f0bc.jpg?width=100&height=100",
  },
  {
    name: "Elena",
    sername: "Voloshyna",
    hw: "35",
    points: [90, 95, 97, 100],
    img: "https://lms.ithillel.ua/uploads/images/55abf3e83c16808834dacda675354944.jpg?width=400&height=400",
  },
  {
    name: "Olesia",
    sername: "Vashenko",
    hw: "36",
    points: [95, 92, 93, 100],
    img: "https://lms.ithillel.ua/uploads/images/9635ebfb0d299223a7ea53144177ad33.jpg?width=400&height=400",
  },
  {
    name: "Олександр",
    sername: "Асаулов",
    hw: "36",
    points: [91, 92, 93, 94],
    img: "https://lms.ithillel.ua/uploads/images/307b36412d16b4b1e87f4b3d914ab360.jpg?width=400&height=400",
  },
  {
    name: "Denys",
    sername: "Kyslytsia",
    hw: "35",
    points: [100, 89, 96, 100],
    img: "https://lms.ithillel.ua/uploads/images/1b94cd2c8d068cebb1049c4c604f3ec0.jpg?width=400&height=400",
  },
  {
    name: "Yulia",
    sername: "Zabuha",
    hw: "34",
    points: [93, 91, 99, 100],
    img: "https://lms.ithillel.ua/assets/images/userpic.jpg",
  },
  {
    name: "Игорь",
    sername: "Денисюк",
    hw: "34",
    points: [100, 100, 90, 95],
    img: "https://lms.ithillel.ua/uploads/images/cabda5a69cf06a445cc729815bd4092b.jpg?width=400&height=400",
  },
  {
    name: "Марта",
    sername: "Качанова",
    hw: "34",
    points: [90, 92, 94, 94],
    img: "https://lms.ithillel.ua/uploads/images/848d937faa82c7b685369bca502dc1eb.jpg?width=400&height=400",
  },
  {
    name: "Катерина",
    sername: "Корицька",
    hw: "34",
    points: [95, 95, 94, 99],
    img: "https://lms.ithillel.ua/uploads/images/22d9ec49ec5b21a62607c89ff27b4366.jpg?width=400&height=400",
  },
  {
    name: "Дарина",
    sername: "Онуфриенко",
    hw: "33",
    points: [99, 99, 90, 92],
    img: "https://lms.ithillel.ua/uploads/images/2b58f1459ff4af6d652f01bbc2c72d56.jpg?width=400&height=400",
  },
  {
    name: "Виталий",
    sername: "Зиннер",
    hw: "31",
    points: [98, 99, 96, 90],
    img: "https://lms.ithillel.ua/uploads/images/dda10d419bf3f15b1a0d0cc866203cc4.jpeg?width=400&height=400",
  },
  {
    name: "Владимир",
    sername: "Кудряшов",
    hw: "29",
    points: [90, 99, 93, 99],
    img: "https://lms.ithillel.ua/uploads/images/21db908e61e1385473f01f9485a5e721.jpg?width=400&height=400",
  },
];

let usersList = users.map((user) => {
  const container = {};
  container.name = user.name;
  container.sername = user.sername;
  container.img = user.img;
  container.hw = user.hw;
  container.points = user.points.reduce((a, b) => a + b, 0);

  return container;
});

usersList.sort((a, b) => {
  return parseFloat(b.points) - parseFloat(a.points);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App usersList={usersList} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
