const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-model");
const ShowBtn = document.querySelectorAll(".show-model");

console.log(ShowBtn);
ShowBtn.forEach((val, index) => {
  val.addEventListener("click", function () {
    console.log("clicked", index);
    overlay.classList.remove("hidden");
    model.classList.remove("hidden");
  });
});
const closeModel = function () {
  overlay.classList.add("hidden");
  model.classList.add("hidden");
};
closeBtn.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  console.log;
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
