// const icon = document.querySelectorAll(".icon[data-src]");
// const anwsers = document.querySelectorAll(".anwser[data-src]");
// const header = document.querySelectorAll(".header__question[data-src]");

const el = document.querySelectorAll(".question");

el.forEach((question) =>
  question.addEventListener("click", (e) => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      el.forEach((question) => question.parentNode.classList.remove("active"));
      question.parentNode.classList.add("active");
    }
  })
);
// icon.forEach((i) =>
//   i.addEventListener("click", function (e) {
//     e.preventDefault();
//     const clicked = e.target;
//     // const header = e.target.closest(".header__question");
//     // const anwser = e.target.closest(".anwser");

//     // console.log(header, anwser);

//     icon.forEach((i) => i.classList.remove("icon--active"));
//     anwsers.forEach((a) => (a.style.display = "none"));
//     header.forEach((h) => h.classList.remove("header__question--active"));

//     clicked.classList.add("icon--active");
//     if (clicked.classList.contains("icon--active")) {
//     } else {
//       anwser.style.display = "none";
//     }
//     clicked.addEventListener("click", function (e) {
//       clicked.classList.toggle("icon--active");
//     });
//   })
// );
