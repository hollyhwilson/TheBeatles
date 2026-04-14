import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Dublin fuel prices strikes",
        description: "Protesters have flooded the streets of Dublin as fuel prices skyrocket.",
        category: "politics",
        tags: ["politics", "local"],
        featured: false,
        image: "/images/catalogue/item-1.png",
        alt: "Truck and tractor on the street during oil strikes"
    },
    {
        id: "2",
        title: "What's made Obama sad?",
        description: "Journalists scramble as they try to ucover the secret of what has upset Obama.",
        category: "entertainment",
        tags: ["sad", "politics"],
        featured: false,
        image: "/images/catalogue/item-2.png",
        alt: "Former US president Barrack Obama crying"
    },
    {
        id: "3",
        title: "Playing the harp is back in fashion, states harp enthusiast",
        description: "A professional harp-lover recounts falling in love with an instrument",
        category: "entertainment",
        tags: ["music", "love"],
        featured: true,
        image: "/images/catalogue/item-3.png",
        alt: "Woman playing the harp"
    },
    {
        id: "4",
        title: "Taxes create depression",
        description: "Taxes are NOT fun, multiple witnesses state.",
        category: "local",
        tags: ["sad", "money"],
        featured: true,
        image: "/images/catalogue/item-4.png",
        alt: "Woman doing her taxes with a laptop and documents"
    },
    {
        id: "5",
        title: "Nature Walks",
        description: "A calming walk in the woods results in instantaneous self-combustion.",
        category: "presence",
        tags: ["nature", "radiation", "local warming"],
        featured: true,
        image: "/images/catalogue/item-5.png",
        alt: "Building on fire"
    },
    {
        id: "6",
        title: "Gorillaz's Dublin concert a massive success",
        description: "People came to watch a coupel of lads jam it out with some instruments.",
        category: "entertainment",
        tags: ["gorilla", "concert", "local"],
        featured: false,
        image: "/images/catalogue/item-6.png",
        alt: "A photograph from the Gorillaz concert in Dublin"
    },
    {
        id: "7",
        title: "Howling at the moon boosts serotonin",
        description: "Howl with the wolves like Maroon 5.",
        category: "entertainment",
        tags: ["mindfulness", "love", "mental clarity"],
        featured: false,
        image: "/images/catalogue/item-7.png",
        alt: "Wolf in a grassy field"
    },
    {
        id: "8",
        title: "Recycling so easy even a baby can do it",
        description: "Separating recyclable materials like a boss.",
        category: "local",
        tags: ["nature", "local"],
        featured: false,
        image: "/images/catalogue/item-8.png",
        alt: "Mother and baby doing their recycling together"
    },
    {
        id: "9",
        title: "Power Posture Drills",
        description: "Learn ancient standing postures for strength, composure, and body awareness.",
        category: "strength",
        tags: ["posture", "calisthenics", "movement"],
        featured: false,
        image: "/images/catalogue/item-9.png",
        alt: "name"
    },
    {
        id: "10",
        title: "Visualisation Ritual",
        description: "A brief morning visualisation exercise inspired by shinobi anticipation training.",
        category: "focus",
        tags: ["visualisation", "mental rehearsal", "intention"],
        featured: false,
        image: "/images/catalogue/item-10.png",
        alt: "name"
    },
    {
        id: "11",
        title: "Cold Exposure Start",
        description: "A simple cold water splash or shower to build courage and resilience.",
        category: "discipline",
        tags: ["resilience", "health", "willpower"],
        featured: false,
        image: "/images/catalogue/item-11.png",
        alt: "name"
    },
    {
        id: "12",
        title: "The 5-Minute Mind Sweep",
        description: "Declutter your brain with a quick brain dump — inspired by shinobi note-scatter scrolls.",
        category: "focus",
        tags: ["productivity", "mental clarity", "journaling"],
        featured: false,
        image: "/images/catalogue/item-12.png",
        alt: "name"
    },
    {
        id: "13",
        title: "Honor Code Exercise",
        description: "Draft your personal code of honour. Based on the Bushidō virtues.",
        category: "values",
        tags: ["bushido", "identity", "reflection"],
        featured: false,
        image: "/images/catalogue/item-13.png",
        alt: "name"
    },
    {
        id: "14",
        title: "Gratitude Bow Practice",
        description: "A brief ritual of bowing with thanks before meals or rest. Builds humility and reverence.",
        category: "ritual",
        tags: ["gratitude", "humility", "presence"],
        featured: false,
        image: "/images/catalogue/item-14.png",
        alt: "name"
    },
    {
        id: "15",
        title: "Tea Ceremony Lite",
        description: "A simplified tea ritual for calm presence. Inspired by Zen practice.",
        category: "presence",
        tags: ["ritual", "zen", "stillness"],
        featured: false,
        image: "/images/catalogue/item-15.png",
        alt: "name"
    }
];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(catalogue, $catalogue => {
    const allTags = $catalogue.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
