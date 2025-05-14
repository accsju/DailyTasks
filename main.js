const menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = () => {
    document.body.classList.toggle("menu-open");
}
window.onresize = () => {
    document.body.classList.remove("menu-open");
}
const globalMenuMask = document.getElementById("global-menu-mask");
globalMenuMask.onclick = () => {
    document.body.classList.remove("menu-open");
}