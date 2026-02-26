import { writable } from 'svelte/store';

/**
 * Collection of quotes to inspire and motivate students
 * Each quote is structured with the text and author for easy display.
 */
const quoteList = [
    {
        quote: "The obstacle is the path.",
        author: "Zen Proverb"
    },
    {
        quote: "He who conquers himself is the mightiest warrior.",
        author: "Confucius"
    },
    {
        quote: "Waste no more time arguing what a good man should be. Be one.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Do not seek to follow in the footsteps of the wise. Seek what they sought.",
        author: "Matsuo Bashō"
    },
    {
        quote: "Loyalty is the strongest bond of all. Without it, there is no honour.",
        author: "Bushidō – Chūgi"
    },
    {
        quote: "True patience means bearing the unbearable.",
        author: "Yamamoto Tsunetomo"
    },
    {
        quote: "Adaptability is the greatest strength of the shinobi.",
        author: "Shinobi Principle – Tenacity"
    },
    {
        quote: "Be like water. Flow where there is resistance and carve your way in time.",
        author: "Laozi (adapted)"
    },
    {
        quote: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln (attributed)"
    },
    {
        quote: "Even in chaos, there is stillness inside.",
        author: "Zen Saying"
    }
];


// Writable store for the current quote
export const currentQuote = writable({
    quote: "The obstacle is the path.",
    author: "Zen Proverb"
});


// Utility to select a new random quote
export function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    currentQuote.set(quoteList[randomIndex]);
}
