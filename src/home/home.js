
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

function createTiles(tilesList) {
    const tilesWrapper = document.createElement('div');
    tilesWrapper.classList.add('tiles');

    tilesList.forEach(tile => tilesWrapper.appendChild(createTile(tile)));
    return tilesWrapper;
}

function createTile(tile) {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.classList.add(tile.type);

    tile.elements.forEach(element => {
        const newElement = document.createElement(element.tag);
        newElement.textContent = element.text;
        newTile.appendChild(newElement);
    });

    return newTile;
}

export default function loadPage(icon) {
    const content = document.getElementById('content');
    const tiles = [];

    while(content.hasChildNodes())
        content.removeChild(content.firstChild);

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

    content.appendChild(createHeader("gusteau's", icon, '5 golden stars icon'));
    content.appendChild(createNav(['Home', 'Menu', 'Contact']));
    content.appendChild(createTiles(tiles));
}