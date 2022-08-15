
document.querySelector('.collapsible__content').style.overflow = "hidden";

const anim = document.querySelector(".collapsible__content")
  .animate(
    { width: ["0px", "auto"] },
    { duration: 0, fill: "both", easing: "linear" }
  );

anim.pause();

document.querySelector(".collapsible__button").addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
});



