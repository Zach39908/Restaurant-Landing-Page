import { menu } from '../data.js';
import { Element, Tile, createTiles } from '../home/home.js';

function buildMenu() {
    const tiles = [];

    menu.forEach(menuItem => {
        if(menuItem.type === 'heading')
            tiles.push(Tile('menu-heading', [Element('h2', menuItem.text)]));
        if(menuItem.type === 'dish') {
            tiles.push(Tile('menu-dish', []));
            tiles[tiles.length - 1].elements.push(Element('h3', menuItem.name));
            tiles[tiles.length - 1].elements.push(Element('p', menuItem.text));
            tiles[tiles.length - 1].elements.push(Element('img', null, 'item-image', menuItem.image));
        }
    });

    return tiles;
}

export default function loadPage() {
    const content = document.getElementById('content');
    const tiles = content.querySelector('.tiles');

    if(tiles)
        content.removeChild(tiles);

    content.appendChild(createTiles(buildMenu()));
}
