const barbtn = document.querySelector(".hamburger");
const btn = document.querySelector(".btn");
const navmenu = document.querySelector(".nav-menu");

const drop = document.querySelector('.drop-menu')
const icon = document.querySelector(".icon")
const fasolid = document.querySelector(".fa-plus")
barbtn.addEventListener("click", () => {
  navmenu.classList.add("show-nav");
});
btn.addEventListener("click", () => {
  navmenu.classList.remove("show-nav");
});

icon.addEventListener("click", ()=>{
    fasolid.classList.toggle("turn");
    drop.classList.toggle("show-drop")
})

