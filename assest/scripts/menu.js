const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");

function showMenu() {
    menu.classList.toggle('show');
}

menuIcon.addEventListener('click', showMenu);

function changeMenuIcon () {
    if (menu.classList.contains('show')) {
        menuIcon.src = 'assets/images/iconCloseMenu.svg';
        menuIcon.title = 'fechar menu';
    } else {
        menuIcon.src = 'assets/images/iconMenu.svg';
        menuIcon.title = 'mostrar menu';
    }
}