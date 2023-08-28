
export function createHeader(name, icon, altTxt) {
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

export function createNav(buttons) {
    const navBar = document.createElement('nav');

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button;
        navBar.appendChild(btn);
    });

    return navBar;
}

export function createTiles(tilesList) {
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
