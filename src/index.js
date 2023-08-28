import { createHeader, createNav, createTiles } from './home.js';
import './style.css'
import Icon from './icon.png'

const Element = ((tag, text) => {
    return {
        tag: tag,
        text: text,
    };
});

const Tile = ((page, elements) => {
    return {
        type: page,
        elements: elements,
    };
});

const content = document.getElementById('content');
const tiles = [];

tiles.push(Tile('home', []));
tiles.push(Tile('home', []));
tiles[0].elements.push(Element('h2', 'About Us'));
tiles[0].elements.push(Element('p', `Indulge in a culinary journey that transcends the ordinary at Gusteau's, \
the iconic restaurant immortalized in the heartwarming movie Ratatouille. Nestled in the charming streets of \
Paris, Gusteau's is more than just a dining establishment; it's a symphony of flavors orchestrated to perfection. \
With a legacy built upon the visionary culinary prowess of the legendary chef Auguste Gusteau, this restaurant \
offers an exquisite fusion of innovation and tradition.`))
tiles[1].elements.push(Element('h2', 'Location & Hours'));
tiles[1].elements.push(Element('p', 'Le Petit Délice, 42 Rue Lumière, Paris, 75015, France'));
tiles[1].elements.push(Element('p', 'Mon-Fri: 3pm - 10pm | 15:00 - 22:00'));
tiles[1].elements.push(Element('p', 'Sat-Sun: 5pm - 12pm | 17:00 - 24:00'));

content.appendChild(createHeader("gusteau's", Icon, '5 golden stars icon'));
content.appendChild(createNav(['Home', 'Menu', 'Contact']));
content.appendChild(createTiles(tiles));