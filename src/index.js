import menuCardTpl from './templates/menu-tpl.hbs';
import './styles.css';
import menuItems from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const themSwitcher = document.querySelector(".theme-switch__control");
const themeToggle = document.querySelector('.theme-switch__toggle');
const bgColor = document.querySelector("body");
const menuList = document.querySelector('.js-menu');
const menuItem = createMenuMarkup(menuItems);

themSwitcher.addEventListener("change", onControlThemeSwitch);
populateChooseTheme();

menuList.insertAdjacentHTML("beforeend", menuItem);

function onControlThemeSwitch(event) {
    if (event.target.checked) {
        bgColor.classList.remove(LIGHT);
        bgColor.classList.add(DARK);
        localStorage.setItem("theme", DARK);
    } else {
        bgColor.classList.remove(DARK);
        bgColor.classList.add(LIGHT);
        localStorage.setItem("theme", LIGHT);
    }
};

function populateChooseTheme(event) {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        bgColor.classList.toggle(currentTheme);
    }

    if (currentTheme === DARK) {
        // themeToggle.setAttribute('checked', 'event.target.checked');
        themeToggle.checked = true;
    }
}

function createMenuMarkup(menuItems) {
    return menuItems.map(menuCardTpl).join('');
}