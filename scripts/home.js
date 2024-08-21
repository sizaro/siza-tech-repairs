const menuButton = document.querySelector(".menu");
const nav = document.querySelector("#navigation ul");

menuButton.addEventListener("click", () =>{
    nav.classList.toggle("active")
})