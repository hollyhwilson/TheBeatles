<script>
    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    export let error;
    export let status;
</script>


<div class="error-container" role="alert">
    <h1 class="error-code">{status ?? 404}</h1>

    {#if status === 404 || (!status && error == null)}
        <p class="message">
            The path <code>{page.url.pathname}</code> could not be found.
        </p>
    {:else if error}
        <p class="message">{error.message}</p>
    {:else}
        <p class="message">An unknown error occurred. Please try again.</p>
    {/if}

    <a class="home-button" href="{resolve('/')}">← Return to home</a>
</div>


<style>
    .error-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: var(--space-xl) var(--space-md);
        text-align: center;
        color: var(--text-primary);
    }

    .error-code {
        font-size: 8rem;
        font-family: var(--font-heading);
        font-weight: 700;
        margin: 0;
        color: var(--color-primary);
        animation: pop 0.5s ease-out;
    }

    .message {
        font-size: var(--font-xl);
        font-family: var(--font-body);
        margin: var(--space-md) 0 var(--space-sm);
    }

    code {
        background-color: var(--color-code-bg);
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius-sm);
        font-size: var(--font-base);
        font-family: var(--font-code);
    }

    .home-button {
        margin-top: var(--space-md);
        padding: var(--space-sm) var(--space-lg);
        background-color: var(--color-accent);
        color: var(--text-contrast);
        text-decoration: none;
        border-radius: var(--radius-md);
        font-weight: 600;
        font-size: var(--font-lg);
        transition: background-color var(--transition-fast), transform var(--transition-fast);
        box-shadow: var(--shadow-sm);
    }

    .home-button:hover,
    .home-button:focus {
        background-color: var(--color-highlight);
        transform: translateY(-1px);
    }

    @keyframes pop {
        from {
            opacity: 0;
            transform: scale(0.85);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (max-width: 768px) {
        .error-code {
            font-size: 6rem;
        }

        .message {
            font-size: var(--font-lg);
        }

        .home-button {
            width: 100%;
        }
    }
</style>