<script>
    import { asset } from '$app/paths';
    import Navigation from './Navigation.svelte';
</script>


<header class="header">
    <div class="logo-area">
        <img src={asset("/logo.png")} alt="Starter Kit Logo" />
        <h1>Starter Kit</h1>
    </div>
    <Navigation />
</header>


<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--space-lg);
        background-color: var(--color-surface);
        box-shadow: var(--shadow-md);
        border-bottom: var(--border-default);
        position: relative;
        z-index: 100;
    }

    .logo-area {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-family: var(--font-heading);
    }

    .logo-area img {
        width: 96px;
        height: auto;
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-sm);
    }

    .logo-area h1 {
        margin: 0;
        font-size: var(--font-xxl);
        font-weight: 700;
        background: var(--gradient-brand);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
        animation: fadeInTitle 0.6s ease forwards;
    }

    @keyframes fadeInTitle {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            align-items: flex-start;
            padding: var(--space-sm);
        }

        .logo-area {
            justify-content: center;
            width: 100%;
        }

        .logo-area h1 {
            font-size: var(--font-lg);
        }
    }
</style>
