<script>
    import { asset } from '$app/paths';

    export let title = 'Untitled';
    export let description = 'No description provided.';
    export let image = '/images/catalogue/placeholder.jpg';
    export let category = 'Uncategorised';
    /** @type {string | any[]} */
    export let tags = [];
    export let animationDelay = 0;
    let expanded = false;
    
    $: isLong = description.length > 120;
</script>


<article class="card" aria-label={`Card: ${title}`} style="animation-delay: {animationDelay}ms;">
    <div class="image-wrapper">
        <img src={asset(image)} alt={`Image for ${title}`} />
    </div>

    <div class="content">
        <h2>{title}</h2>
        <p class="category">{category}</p>

        <p class="description">
            {#if expanded || !isLong}
                {description}
            {:else}
                {description.substring(0, 120)}…
            {/if}
        </p>

        {#if isLong}
            <button class="toggle" on:click={() => expanded = !expanded}>
                {expanded ? "Read Less" : "Read More"}
            </button>
        {/if}

        {#if tags?.length}
            <div class="tags">
                {#each tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        {/if}
    </div>
</article>


<style>
    .card {
        display: flex;
        flex-direction: column;
        background: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        height: 600px;
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInSlide 0.8s ease forwards;
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-background);
        overflow: hidden;
        height: 320px;
    }

    .image-wrapper img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .content {
        padding: var(--space-md);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .content h2 {
        font-family: var(--font-heading);
        font-size: var(--font-lg);
        margin: 0;
        color: var(--text-primary);
    }

    .category {
        font-size: var(--font-sm);
        color: var(--text-secondary);
        font-style: italic;
    }

    .description {
        font-size: var(--font-base);
        color: var(--text-secondary);
    }

    .toggle {
        background: var(--color-accent);
        color: var(--text-contrast);
        border: none;
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius-sm);
        font-size: var(--font-sm);
        cursor: pointer;
        align-self: start;
        transition: background-color var(--transition-fast);
    }

    .toggle:hover {
        background-color: var(--color-highlight);
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-top: var(--space-sm);
    }

    .tag {
        font-size: var(--font-xs);
        padding: 0.2rem 0.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        background: var(--color-code-bg);
        color: var(--text-tertiary);
    }

    @keyframes fadeInSlide {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
