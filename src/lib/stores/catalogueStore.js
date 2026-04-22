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
        title: "What's made Obama sad",
        description: "Journalists scramble as they try to ucover the secret of what has upset Obama. ", 
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
        category: "local",
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
        title: "Fish dish stuns critics",
        description: "Nely opened seafood restaurant in Dublin wins an award thanks to delightful fish dish",
        category: "local",
        tags: ["fish", "food"],
        featured: false,
        image: "/images/catalogue/item-9.png",
        alt: "Cooked fish fillets on top of curry sauce"
    },
    {
        id: "10",
        title: "Video games as a way to help children develop",
        description: "A different onlook on games as more of a learning tool rather than something harmful.",
        category: "entertainment",
        tags: ["internet", "childcare",],
        featured: false,
        image: "/images/catalogue/item-10.png",
        alt: "Two kids on a couch holding console controllers"
    },
    {
        id: "11",
        title: "Oldest gorilla in captivity celebrates 69th birthday",
        description: "The oldest captive gorilla from Berlin ZOO turns 69 years old.",
        category: "entertainment",
        tags: ["animals", "gorilla"],
        featured: false,
        image: "/images/catalogue/item-11.png",
        alt: "Gorilla next to a basket of vegetables with the number 69 on it"
    },
    {
        id: "12",
        title: "Fish holds world record for driving",
        description: "Oh yeah, this fish can drive, baby.",
        category: "entertainment",
        tags: ["fish", "world record"],
        featured: false,
        image: "/images/catalogue/item-12.png",
        alt: "Goldfish in a fish tank on wheels"
    },
    {
        id: "13",
        title: "Robot arrested for public disturbance",
        description: "A humanoid robot arrested after expressed agression towards an eldery woman.",
        category: "politics",
        tags: ["robot", "police"],
        featured: false,
        image: "/images/catalogue/item-13.png",
        alt: "Humanoid robot being taken away by police officers"
    },
    {
        id: "14",
        title: "New York UFO sighting",
        description: "A UFO (Unidentified Flying Object) spotted flying over New York City leaves conspiracists stunned.",
        category: "entertainment",
        tags: ["UFO", "conspiracy"],
        featured: false,
        image: "/images/catalogue/item-14.png",
        alt: "Dark sky with red cirles pointing out lights in a triangular formation"
    },
    {
        id: "15",
        title: "Titanic exhibition reopens its doors",
        description: "Beloved exhibition about the infamous sunken cruise reopens after massive success.",
        category: "entertainment",
        tags: ["museum", "learning"],
        featured: false,
        image: "/images/catalogue/item-15.png",
        alt: "Closeup photograph of Titanic model"
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
