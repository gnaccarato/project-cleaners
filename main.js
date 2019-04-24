const navbar = document.getElementById('navbar');
const navDrop = document.getElementById('navbar_drop');

navDrop.addEventListener('click', () => {
    if(navbar.style.display != 'block') {
        navbar.style.display = 'block';
        this.innerHTML = 'x';
    } else {
        navbar.style.display = 'none';
        this.innerHTML = '=';
    }
})