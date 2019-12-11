// button to open modal
let btn = document.querySelector("#select");
// button to close modal
let closeBtn = document.querySelector(".modal__close");
// modal container
let modal = document.querySelector(".modal");

console.log(modal, closeBtn, btn);

// opening a modal
btn.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

// closing a modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// closing a modal if clicked outside anywhere
window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
