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
    <title>Relevant</title>
</svelte:head>


<!-- Page Container -->
<div class="home-container">

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Top Articles</h2>
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
                        article={item.article}
                    />
                </button>
            {/each}
        </div>
        <a class="browse-link" href="{resolve('/catalogue')}">Browse Full Catalogue →</a>
    </section>

    <!-- About Teaser Section -->
    <section class="about-teaser">
       
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

    /* Featured Section */
    .featured {
        padding: 0 var(--space-md);
       /* background-image: url('/images/backgrounds/rice-texture.png');
        background-size: 200px;
        background-repeat: repeat; */
        background-color: var(--color-background);
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
       /* border-top: var(--border-default);
       /* background: linear-gradient(to top, var(--color-surface), transparent);
        background-image: url('/images/backgrounds/scroll-teaser.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay; */
        background-color: var(--color-background);
    }

</style>
