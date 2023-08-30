import { homeInfo, contactInfo } from '../data.js';
import { Element, Tile, createTiles } from '../home/home.js';

function buildContactInfo() {
    const tiles = [];

    tiles.push(Tile('contact-info', []));
    tiles.push(Tile('contact-info', []));

    tiles[0].elements.push(Element('h2', 'Contact Info'));
    tiles[0].elements.push(Element('p', `Phone: &nbsp ${contactInfo.phone}`));
    tiles[0].elements.push(Element('p', `Email: &nbsp ${contactInfo.email}`));
    tiles[0].elements.push(Element('p', `Instagram: &nbsp ${contactInfo.social.instagram}`));
    tiles[0].elements.push(Element('p', `Twitter: &nbsp ${contactInfo.social.twitter}`));
    tiles[0].elements.push(Element('p', `Facebook: &nbsp ${contactInfo.social.facebook}`));
    tiles[1].elements.push(Element('h2', 'Location & Hours'));
    tiles[1].elements.push(Element('p', homeInfo.location));

    for(const day in homeInfo.hours)
        tiles[1].elements.push(Element('p', `${day}: &nbsp ${homeInfo.hours[day]}`));

    return tiles;
}

export default function loadPage() {
    const content = document.getElementById('content');
    const tiles = content.querySelector('.tiles');

    if(tiles)
        content.removeChild(tiles);

    content.appendChild(createTiles(buildContactInfo()));
}
