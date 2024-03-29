// scroll
let started = true;
window.addEventListener("scroll", () => {
  //ourskills
  let ourSkills = document.querySelector(".our-skills");
  let rate = document.querySelectorAll(".skills .tape .rate");
  if (scrollY >= ourSkills.offsetTop - 200) {
    rate.forEach((e) => (e.style.width = e.dataset.width));
  }
  //stats
  let stats = document.querySelector(".stats");
  let h1 = document.querySelectorAll(".stats .col h1");
  let col = document.querySelectorAll(".stats .col");
  if (scrollY >= stats.offsetTop - 200) {
    if (started) {
      h1.forEach((e) => {
        let number = 0;
        let counter = setInterval(() => {
          if (number == e.dataset.content) {
            clearInterval(counter);
          } else {
            number++;
            e.innerHTML = number;
            if (e.dataset.letter != undefined) {
              e.innerHTML += e.dataset.letter;
            }
          }
        }, 10);

        for (let i = 0; i < col.length; i++) {
          setTimeout(() => {
            col[i].style.cssText =
              "transform: translateY(0%); opacity: 0.8; z-index: 1";
          }, i * 200);
        }
      });
    }
    started = false;
  }
});

// top video

let videoB = document.querySelectorAll(".top-videos .side .video");
let video = document.querySelectorAll(".top-videos .screen .video");
let videoBa = [...videoB];

videoB.forEach(
  (e) =>
    (e.onclick = () => {
      video.forEach((el) => el.classList.remove("active"));
      video[videoBa.indexOf(e)].classList.add("active");
      videoB.forEach((e) => (e.style.backgroundColor = "transparent"));
      e.style.backgroundColor = "#fafafa";
    })
);

let articles = document.getElementById("articles");
window.addEventListener("scroll", () => {
  let el = document.querySelectorAll(".reveal");

  for (let i = 0; i < el.length; i++) {
    let windowHeight = window.innerHeight;
    let reveal = el[i].getBoundingClientRect().top;

    if (reveal < windowHeight - 100) {
      el[i].classList.add("active");
    } else {
      el[i].classList.remove("active");
    }
  }
});
