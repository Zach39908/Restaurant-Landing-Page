import dish1 from './menu/dish1.jpg';
import dish2 from './menu/dish2.jpg';
import dish3 from './home/ratatouille.jpg';
import dish4 from './menu/dish4.jpg';
import dish5 from './menu/dish5.jpg';
import dish6 from './menu/dish6.jpg';
import dish7 from './menu/dish7.jpg';
import dish8 from './menu/dish8.jpg';

export let homeInfo = {
    name: "gusteau's",
    about: `Indulge in a culinary journey that transcends the ordinary at Gusteau's, \
    the iconic restaurant immortalized in the heartwarming movie Ratatouille. Nestled \
    in the charming streets ofParis, Gusteau's is more than just a dining establishment; \
    it's a symphony of flavors orchestrated to perfection. With a legacy built upon the \
    visionary culinary prowess of the legendary chef Auguste Gusteau, this restaurant \
    offers an exquisite fusion of innovation and tradition.`,
    location: 'Le Petit Délice, 42 Rue Lumière, Paris, 75015, France',
    hours: {
        Sunday: '3pm - 10pm',
        Monday: '3pm - 10pm',
        Tuesday: '3pm - 10pm',
        Wednesday: '3pm - 10pm',
        Thursday: '5pm - 12pm',
        Friday: '5pm - 12pm',
        Saturday: '5pm - 12pm'
    },
};

export let menu = [
    {
        type: 'heading',
        text: 'Beverages',
    },
    {
        type: 'dish',
        name: 'Éclat de Citron Vert',
        text: `A zesty symphony of freshly grated lime zest and handpicked verbena leaves, \
        offering a vibrant and invigorating experience in every sip.`,
        image: dish1,
    },
    {
        type: 'dish',
        name: 'Fleur de Thé Blanc',
        text: `Delicate white tea blossoms unfold in a clear infusion, infusing the air with \
        notes of apricot and jasmine, a tranquil ode to Parisian gardens.`,
        image: dish2,
    },
    {
        type: 'heading',
        text: 'Entrees',
    },
    {
        type: 'dish',
        name: 'Ratatouille Rustique',
        text: `A comforting medley of slow-cooked vegetables, celebrating the \
        essence of Provence with sun-kissed tomatoes, eggplant, zucchini, and \
        bell peppers.`,
        image: dish3,
    },
    {
        type: 'dish',
        name: 'Saumon en Croûte de Sésame',
        text: `A succulent salmon fillet crusted with toasted sesame seeds, \
        nestled atop a bed of citrus-infused quinoa, harmonizing flavors and \
        textures in every bite.`,
        image: dish4,
    },
    {
        type: 'dish',
        name: 'Bouillabaisse Marseillaise',
        text: `A hearty fisherman's stew with a mix of tender seafood including \
        fish, shrimp, mussels, and clams, simmered in a flavorful saffron-infused \
        tomato broth.`,
        image: dish5,
    },
    {
        type: 'dish',
        name: 'Crêpes Suzette',
        text: `Thin crêpes bathed in a luscious orange-infused caramel sauce, \
        flambéed with Grand Marnier tableside, and garnished with candied orange \
        zest.`,
        image: dish6,
    },
    {
        type: 'dish',
        name: 'Salade Niçoise',
        text: `A vibrant composed salad featuring fresh mixed greens, seared \
        tuna, hard-boiled eggs, green beans, olives, and potatoes, dressed with \
        a zesty vinaigrette.`,
        image: dish7,
    },
    {
        type: 'dish',
        name: 'Pain Perdu aux Framboises',
        text: ` French toast made from brioche slices soaked in vanilla custard, \
        pan-fried until golden, and topped with a compote of fresh raspberries \
        and a dusting of powdered sugar.`,
        image: dish8,
    },
];
