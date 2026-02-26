<script>
    import { fade, scale } from 'svelte/transition';
    export let isOpen = false;
    export let quote = "The obstacle is the path.";
    export let author = "Zen Proverb";
    export let onClose = () => {};

    // @ts-ignore
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') onClose();
    };
</script>

{#if isOpen}
    <div class="modal-overlay" 
        role="dialog"
        aria-modal="true"
        aria-label="Inspirational Quote"
        tabindex="-1"
        on:click={onClose}
        on:keydown={handleKeyDown}
        transition:fade={{ duration: 300 }}
    >
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <section
            class="modal-content"
            transition:scale={{ duration: 300 }}
            on:click|stopPropagation
            role="document"
        >
            <blockquote>
                <p class="quote-text">“{quote}”</p>
                {#if author}
                    <footer class="quote-author">— {author}</footer>
                {/if}
            </blockquote>
            <button class="close-button" on:click={onClose} aria-label="Close modal">Close</button>
        </section>
    </div>
{/if}


<style>
    .modal-overlay {
        position: fixed;
        inset: 0;
        background-color: var(--color-overlay);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: var(--space-md);
    }

    .modal-content {
        background: var(--color-surface);
        color: var(--text-primary);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        max-width: 500px;
        width: 100%;
        padding: var(--space-lg);
        text-align: center;
        position: relative;
    }

    blockquote {
        font-family: var(--font-quote);
        font-style: italic;
        color: var(--text-secondary);
        margin: 0;
    }

    .quote-text {
        font-size: var(--font-lg);
        margin-bottom: var(--space-sm);
    }

    .quote-author {
        font-size: var(--font-sm);
        font-style: normal;
        color: var(--text-tertiary);
    }

    .close-button {
        margin-top: var(--space-md);
        background-color: var(--color-accent);
        color: var(--text-contrast);
        border: none;
        padding: var(--space-sm) var(--space-md);
        font-size: var(--font-base);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: background-color var(--transition-fast);
    }

    .close-button:hover,
    .close-button:focus {
        background-color: var(--color-highlight);
    }
</style>

