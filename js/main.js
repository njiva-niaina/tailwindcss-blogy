const navMenu = document.querySelector('.navMenu');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
function toggleNavMenu() {
    navMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
}
menuBtn.addEventListener('click', toggleNavMenu);
closeBtn.addEventListener('click', toggleNavMenu);