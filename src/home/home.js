import { homeInfo } from '../data.js'

export function Tile(cssClass, elements) {
    return {
        cssClass: cssClass,
        elements: elements,
    }
}

export function Element(tag, text, cssClass, src) {
    return {
        tag: tag,
        text: text,
        cssClass: cssClass,
        src: src,
    }
}

function createHeader(name, icon, altTxt) {
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    const bgImg = document.createElement('img');
    const displayName = name.toUpperCase();

    heading.innerHTML = `${displayName[0]}<span>${displayName.slice(1, -1)}</span>${displayName[displayName.length - 1]}`;
    bgImg.src = icon;
    bgImg.alt = altTxt;
    bgImg.classList.add('icon');

    header.appendChild(heading);
    header.appendChild(bgImg);
    return header;
}

function createNav(buttons) {
    const navBar = document.createElement('nav');

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button;
        navBar.appendChild(btn);
    });

    return navBar;
}

function createTile(tile) {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.classList.add(tile.cssClass);

    tile.elements.forEach(element => {
        const newElement = document.createElement(element.tag);
        newElement.innerHTML = element.text;

        if(element.cssClass)
            newElement.classList.add(element.cssClass);
        if(element.src)
            newElement.src = element.src;

        newTile.appendChild(newElement);
    });

    return newTile;
}

function buildHome() {
    const tiles = [];

    tiles.push(Tile('home-info', []));
    tiles.push(Tile('home-info', []));
    tiles[0].elements.push(Element('h2', 'About Us'));
    tiles[0].elements.push(Element('p', homeInfo.about));
    tiles[1].elements.push(Element('h2', 'Location & Hours'));
    tiles[1].elements.push(Element('p', homeInfo.location));

    for(const day in homeInfo.hours)
        tiles[1].elements.push(Element('p', `${day}: &nbsp ${homeInfo.hours[day]}`));

    return tiles;
}

export function createTiles(tilesList) {
    const tilesWrapper = document.createElement('div');
    tilesWrapper.classList.add('tiles');

    tilesList.forEach(tile => tilesWrapper.appendChild(createTile(tile)));
    return tilesWrapper;
}

export default function loadPage(icon) {
    const content = document.getElementById('content');
    const tiles = content.querySelector('.tiles');
    const header = content.querySelector('header');

    if(tiles)
        content.removeChild(tiles);
    if(!header) {
        content.appendChild(createHeader(homeInfo.name, icon, 'icon of 5 gold stars'));
        content.appendChild(createNav(['Home', 'Menu', 'Contact']));
    }

    content.appendChild(createTiles(buildHome()));
}
