
//preloader animation fade//
var loader = document.querySelector(".pageloader")

window.addEventListener("load", vanish);

function vanish() {
	loader.classList.add("disappear");
};/* mobile menu*/
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () =>{
	navUL.classList.toggle('show');
});

/*--------*/
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close");


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
   
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".bg-modal");
    modal.classList.remove("active");
  });
});




