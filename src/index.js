import './styles.css';
import images from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themSwitcher = document.querySelector(".theme-switch__control");
const themeToggle = document.querySelector('.theme-switch__toggle');
const bgColor = document.querySelector("body");

themSwitcher.addEventListener("change", onControlThemeSwitch);
populateChooseTheme();

function onControlThemeSwitch(event) {
    if (event.target.checked) {
        bgColor.classList.remove(Theme.LIGHT);
        bgColor.classList.add(Theme.DARK);
        localStorage.setItem("theme", Theme.DARK);
    } else {
        bgColor.classList.remove(Theme.DARK);
        bgColor.classList.add(Theme.LIGHT);
        localStorage.setItem("theme", Theme.LIGHT);
    }
};

function populateChooseTheme(event) {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        bgColor.classList.toggle(currentTheme);
    }

    if (currentTheme === Theme.DARK) {
        themeToggle.setAttribute('checked', 'event.target.checked');
    }
}
