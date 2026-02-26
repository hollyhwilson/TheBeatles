<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { CatalogueCard, Modal } from '$lib/components';
    import { catalogue } from '$lib/stores/catalogueStore.js';
    import { currentQuote, setRandomQuote } from '$lib/stores/quoteStore.js';
    
    let showQuoteModal = false;

    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $catalogue && (featuredItems = $catalogue.slice(0, 4));

    function openQuoteModal() {
        setRandomQuote();
        showQuoteModal = true;
    }
</script>


<svelte:head>
    <title>Starter Kit</title>
</svelte:head>


<!-- Page Container -->
<div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
        <h1>Live Mindfully. Learn Purposefully.</h1>
        <p class="subheading">
            Inspired by the 7 Virtues of Bushidō and the 11 Principles of the Shinobi.
        </p>
        <button class="inspire-button" on:click={openQuoteModal}>
            Find Inspiration
        </button>
    </section>

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Featured Practices</h2>
        <div class="card-grid">
            {#each featuredItems as item, index}
                <button
					type="button"
					class="card-button"
					on:click={() => goto(resolve('/catalogue/[title]', { title: item.title }))}
					aria-label={`View details for ${item.title}`}
				>
                    <CatalogueCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        category={item.category}
                        tags={item.tags}
                        animationDelay={index * 80}
                    />
                </button>
            {/each}
        </div>
        <a class="browse-link" href="{resolve('/catalogue')}">Browse Full Catalogue →</a>
    </section>

    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>Why This Matters</h2>
        <p>
            This project blends timeless wisdom with modern habits — from Stoic journaling to Shinobi adaptability.
            Whether you seek health, discipline, or mindfulness, our tools are here to guide you.
        </p>
        <a href="{resolve('/about')}" class="learn-more">Learn more →</a>
    </section>

    <!-- Quote Modal -->
    <Modal
        bind:isOpen={showQuoteModal}
        {...$currentQuote}
        onClose={() => (showQuoteModal = false)}
    />
</div>


<style>
    .home-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    /* Hero Section */
    .hero {
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        background-image: url('/images/backgrounds/zen-hero.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(255, 255, 255, 0.75);
    }

    .hero h1 {
        font-size: var(--font-xxl);
        font-family: var(--font-heading);
        margin-bottom: var(--space-sm);
    }

    .subheading {
        font-size: var(--font-lg);
        font-family: var(--font-body);
        color: var(--text-secondary);
        margin-bottom: var(--space-md);
    }

    .inspire-button {
        padding: var(--space-sm) var(--space-lg);
        background-color: var(--color-accent);
        color: var(--text-contrast);
        font-size: var(--font-base);
        font-weight: 600;
        border: none;
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: background-color var(--transition-fast);
    }

    .inspire-button:hover,
    .inspire-button:focus {
        background-color: var(--color-highlight);
    }

    /* Featured Section */
    .featured {
        padding: 0 var(--space-md);
        background-image: url('/images/backgrounds/rice-texture.png');
        background-size: 200px;
        background-repeat: repeat;
        background-color: rgba(255, 255, 255, 0.85);
    }

    .featured h2 {
        text-align: center;
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
    }

	/* Ensure button styling doesn’t interfere */
	.card-button {
		all: unset; /* Remove default button styles */
		cursor: pointer;
		display: block;
		text-align: inherit;
	}

	.card-button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: var(--space-lg);
        margin-bottom: var(--space-md);
    }

    .browse-link {
        display: block;
        text-align: center;
        margin-top: var(--space-md);
        font-weight: 500;
        text-decoration: none;
        color: var(--color-accent);
    }

    /* About Teaser */
    .about-teaser {
        text-align: center;
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-background);
        border-top: var(--border-default);
        background: linear-gradient(to top, var(--color-surface), transparent);
        background-image: url('/images/backgrounds/scroll-teaser.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(255, 255, 255, 0.75);
    }

    .about-teaser h2 {
        font-family: var(--font-heading);
        margin-bottom: var(--space-sm);
    }

    .about-teaser p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 60ch;
        margin: 0 auto var(--space-sm) auto;
    }

    .learn-more {
        font-size: var(--font-sm);
        color: var(--color-accent);
        text-decoration: none;
    }

    .learn-more:hover {
        text-decoration: underline;
    }
</style>
