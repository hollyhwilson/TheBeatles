<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { catalogue, categories, tags } from '$lib/stores';
	import { CatalogueCard } from '$lib/components';

	let search = '';
	let selectedTag = 'all';
	let sortBy = 'title';


	function resetFilters() {
		search = '';
		selectedTag = 'all';
		sortBy = 'title';
	}


	$: isFiltered = search || selectedTag !== 'all' || sortBy !== 'title';

	// Reactive filtered + sorted catalogue
	$: filteredCatalogue = $catalogue
		.filter(item => {
			const matchesTag = selectedTag === 'all' || item.tags?.includes(selectedTag);
			const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
								  item.description.toLowerCase().includes(search.toLowerCase());
			return matchesTag && matchesSearch;
		})
		.sort((a, b) => {
			if (sortBy === 'title') return a.title.localeCompare(b.title);
			if (sortBy === 'category') return a.category.localeCompare(b.category);
			return 0;
		});

    // Reactive hash to force re-animation
	$: animationKey = `${search}-${selectedTag}-${sortBy}-${filteredCatalogue.map(i => i.id).join(',')}`;
</script>


<svelte:head>
    <title>Catalogue | Starter Kit</title>
</svelte:head>


<section class="catalogue-wrapper">
	<div class="catalogue-heading-wrapper">
		<h1 class="catalogue-heading">Catalogue</h1>
	</div>

	<div class="controls">
		<label class="search-input">
			<span role="img" aria-label="Search">🔍</span>
			<input
				type="text"
				bind:value={search}
				placeholder="Search catalogue..."
				aria-label="Search catalogue"
			/>
		</label>

		<label class="tag-select">
			<span role="img" aria-label="Filter">🏷️</span>
			<select bind:value={selectedTag} aria-label="Filter by tag">
				<option value="all">All Tags</option>
				{#each $tags as tag}
					<option value={tag}>{tag}</option>
				{/each}
			</select>
		</label>

		<label class="sort-select">
			<span role="img" aria-label="Sort">⇅</span>
			<select bind:value={sortBy} aria-label="Sort by">
				<option value="title">Sort by Title</option>
				<option value="category">Sort by Category</option>
			</select>
		</label>

		{#if isFiltered}
			<button class="reset-button" on:click={resetFilters}>
				✖ Reset
			</button>
		{/if}
	</div>

    <div class="grid" class:narrow={filteredCatalogue.length <= 2}>
		{#if filteredCatalogue.length > 0}
            {#each filteredCatalogue as item, index (animationKey + '-' + item.id)}
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
        {:else}
            <p class="empty">No items match your search or filter.</p>
        {/if}
	</div>
</section>


<style>
	.catalogue-wrapper {
        width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    .catalogue-heading-wrapper {
        background-image: url('/images/backgrounds/scroll-teaser.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.95;
        padding: var(--space-lg) 0;
        text-align: center;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        margin-bottom: var(--space-lg);
    }

    .catalogue-heading {
        font-family: var(--font-heading);
        font-size: var(--font-xxl);
        position: relative;
        color: var(--text-primary);
    }

    .catalogue-heading::after {
        content: "";
        display: block;
        width: 80px;
        height: 4px;
        margin: var(--space-sm) auto 0;
        background: var(--color-accent);
        border-radius: var(--radius-sm);
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: var(--space-md);
        margin-bottom: var(--space-lg);
    }

    .controls label {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        background-color: var(--color-surface);
        padding: var(--space-xs) var(--space-sm);
        border: var(--border-default);
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-sm);
        transition: box-shadow var(--transition-fast);
    }

    .controls input,
    .controls select {
        background: transparent;
        border: none;
        outline: none;
        font-family: var(--font-body);
        color: var(--text-primary);
        font-size: var(--font-base);
        padding: var(--space-xs) var(--space-sm);
        width: 100%;
    }

    .reset-button {
        background-color: var(--color-accent);
        color: var(--text-contrast);
        border: none;
        border-radius: var(--radius-sm);
        padding: var(--space-xs) var(--space-md);
        cursor: pointer;
        font-size: var(--font-sm);
        transition: background-color var(--transition-fast);
    }

    .reset-button:hover {
        background-color: var(--color-primary);
    }

    .grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        justify-content: center;
		gap: var(--space-lg);
        padding: 0 var(--space-lg);
	}

    .grid.narrow {
		grid-template-columns: repeat(auto-fit, minmax(320px, 640px));
        margin: 0 auto;
    }

    .empty {
		font-style: italic;
		color: var(--text-tertiary);
		margin-top: var(--space-md);
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

    @media (max-width: 640px) {
        .controls {
            flex-direction: column;
            align-items: stretch;
        }

        .grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);
        }
    }
</style>
