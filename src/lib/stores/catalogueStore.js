import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Morning Stretch Ritual",
        description: "A gentle full-body stretch routine rooted in yoga and shinobi practices to awaken body and mind.",
        category: "movement",
        tags: ["mindfulness", "morning", "mobility"],
        featured: false,
        image: "/images/catalogue/item-1.png"
    },
    {
        id: "2",
        title: "Digital Declutter",
        description: "A mindful practice of clearing digital clutter from your phone, desktop, and online space.",
        category: "focus",
        tags: ["focus", "discipline", "organisation"],
        featured: false,
        image: "/images/catalogue/item-2.png"
    },
    {
        id: "3",
        title: "Evening Journaling",
        description: "A structured journaling method inspired by Marcus Aurelius and the Bushidō value of reflection.",
        category: "reflection",
        tags: ["stoicism", "gratitude", "habit"],
        featured: true,
        image: "/images/catalogue/item-3.png"
    },
    {
        id: "4",
        title: "Breath Awareness",
        description: "Learn the art of breath control (kokyū) to centre attention and regulate stress.",
        category: "calm",
        tags: ["zen", "calm", "resilience"],
        featured: true,
        image: "/images/catalogue/item-4.png"
    },
    {
        id: "5",
        title: "Nature Walks",
        description: "Engage all five senses during a silent walk in nature. Based on Shinrin-yoku (forest bathing).",
        category: "presence",
        tags: ["mindfulness", "nature", "ritual"],
        featured: true,
        image: "/images/catalogue/item-5.png"
    },
    {
        id: "6",
        title: "Weekly Reflection",
        description: "A 7-question self-check aligned with the Bushidō virtues to build purpose and resolve.",
        category: "discipline",
        tags: ["bushido", "self-awareness", "growth"],
        featured: false,
        image: "/images/catalogue/item-6.png"
    },
    {
        id: "7",
        title: "Obstacle Reframing",
        description: "A Stoic-based method for interpreting setbacks as learning opportunities.",
        category: "resilience",
        tags: ["stoicism", "grit", "mental clarity"],
        featured: false,
        image: "/images/catalogue/item-7.png"
    },
    {
        id: "8",
        title: "One-Meal Fasting Practice",
        description: "Inspired by samurai simplicity — skip a meal and reflect on needs versus wants.",
        category: "nutrition",
        tags: ["fasting", "clarity", "minimalism"],
        featured: false,
        image: "/images/catalogue/item-8.png"
    },
    {
        id: "9",
        title: "Power Posture Drills",
        description: "Learn ancient standing postures for strength, composure, and body awareness.",
        category: "strength",
        tags: ["posture", "calisthenics", "movement"],
        featured: false,
        image: "/images/catalogue/item-9.png"
    },
    {
        id: "10",
        title: "Visualisation Ritual",
        description: "A brief morning visualisation exercise inspired by shinobi anticipation training.",
        category: "focus",
        tags: ["visualisation", "mental rehearsal", "intention"],
        featured: false,
        image: "/images/catalogue/item-10.png"
    },
    {
        id: "11",
        title: "Cold Exposure Start",
        description: "A simple cold water splash or shower to build courage and resilience.",
        category: "discipline",
        tags: ["resilience", "health", "willpower"],
        featured: false,
        image: "/images/catalogue/item-11.png"
    },
    {
        id: "12",
        title: "The 5-Minute Mind Sweep",
        description: "Declutter your brain with a quick brain dump — inspired by shinobi note-scatter scrolls.",
        category: "focus",
        tags: ["productivity", "mental clarity", "journaling"],
        featured: false,
        image: "/images/catalogue/item-12.png"
    },
    {
        id: "13",
        title: "Honor Code Exercise",
        description: "Draft your personal code of honour. Based on the Bushidō virtues.",
        category: "values",
        tags: ["bushido", "identity", "reflection"],
        featured: false,
        image: "/images/catalogue/item-13.png"
    },
    {
        id: "14",
        title: "Gratitude Bow Practice",
        description: "A brief ritual of bowing with thanks before meals or rest. Builds humility and reverence.",
        category: "ritual",
        tags: ["gratitude", "humility", "presence"],
        featured: false,
        image: "/images/catalogue/item-14.png"
    },
    {
        id: "15",
        title: "Tea Ceremony Lite",
        description: "A simplified tea ritual for calm presence. Inspired by Zen practice.",
        category: "presence",
        tags: ["ritual", "zen", "stillness"],
        featured: false,
        image: "/images/catalogue/item-15.png"
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
