import loadHomePage from './home/home.js'
import './home/style.css'
import Icon from './home/icon.png'

loadHomePage(Icon);

const navBtns = document.querySelectorAll('nav button');
navBtns.forEach(btn => btn.addEventListener('click', e => {
    if(e.target.textContent === 'Home')
        loadHomePage(Icon);
}));
