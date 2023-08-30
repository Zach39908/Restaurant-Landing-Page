import { homeInfo, menu, contactInfo } from './data.js';
import loadHomePage from './home/home.js';
import loadMenuPage from './menu/menu.js';
import loadContactPage from './contact/contact.js';
import './style.css';
import Icon from './home/icon.png';

// import loadMenuPage from './menu/menu.js';

loadHomePage(Icon);

const navBtns = document.querySelectorAll('nav button');
navBtns.forEach(btn => btn.addEventListener('click', e => {
    if(e.target.textContent === 'Home')
        loadHomePage(Icon);
    if(e.target.textContent === 'Menu')
        loadMenuPage();
    if(e.target.textContent === 'Contact')
        loadContactPage();
}));
