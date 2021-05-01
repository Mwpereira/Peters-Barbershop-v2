const burger = document.querySelector('.navbar-burger');
const navMenu = document.querySelector('.navbar-menu');
const nav = document.querySelector('nav');
const logo = document.querySelector('img.logo');

const navBurger = () => {
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        burger.classList.toggle('is-active');
    });
};

const navBackground = () => {
    window.addEventListener('scroll', () => {
        if (this.scrollY < 200){
            nav.classList.add('has-background-transparent')
            logo.classList.add('is-hidden');
        } else {
            nav.classList.remove('has-background-transparent');
            logo.classList.remove('is-hidden');
        }
    });
};

const navLink = () => {
    const navLinks = document.querySelectorAll('.navbar-menu a');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            burger.classList.remove('is-active');
            navMenu.classList.remove('is-active');
        });
    });
};

navBurger();
navBackground();
navLink();
AOS.init();
