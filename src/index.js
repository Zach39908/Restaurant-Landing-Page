import { createHeader, createNav } from './home.js';
import './style.css'
import Icon from './icon.png'

const content = document.getElementById('content');
content.appendChild(createHeader("gusteau's", Icon, '5 golden stars icon'));
content.appendChild(createNav(['Home', 'Menu', 'Contact']));