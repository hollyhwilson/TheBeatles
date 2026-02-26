<script>
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'Catalogue', path: '/catalogue' },
        { name: 'About', path: '/about' }
    ];

    let isOpen = false;

    function hideMenu() {
        isOpen = false;
    }
</script>


<nav class="nav" aria-label="Main navigation">
    <button
        class="burger"
        on:click={() => (isOpen = !isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
    >
        ☰
    </button>

    <ul id="main-menu" class:open={isOpen}>
        {#each navigationItems as item}
            <li class="nav-item">
                <a 
                    href={resolve(item.path)}
                    class:active={page.url.pathname === resolve(item.path)}
                    on:click={hideMenu}
                >{item.name}</a>
            </li>
        {/each}
    </ul>
</nav>


<style>
    .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: var(--space-lg);
        animation: fadeIn var(--transition-slow);
    }

    .nav ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-md);
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-item {
        animation: fadeUp 0.4s ease forwards;
    }

    .nav-item:nth-child(1) { animation-delay: 0.2s; }
    .nav-item:nth-child(2) { animation-delay: 0.4s; }
    .nav-item:nth-child(3) { animation-delay: 0.6s; }
    .nav-item:nth-child(4) { animation-delay: 0.8s; }

    .nav a {
        position: relative;
        font-family: var(--font-body);
        font-size: var(--font-lg);
        font-weight: 600;
        color: var(--text-primary);
        padding: var(--space-xs) var(--space-sm);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .nav a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background: var(--color-secondary);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--transition-fast);
    }

    .nav a:hover::after,
    .nav a:focus::after {
        transform: scaleX(1);
    }

    .nav a:hover,
    .nav a:focus {
        color: var(--color-secondary);
    }

    .nav a.active {
        color: var(--color-primary);
    }

    .nav a.active::after {
        transform: scaleX(1);
        background: var(--gradient-brand);
        background-size: 200%;
        animation: slideGradient 4s linear infinite;
    }

    .burger {
        display: none;
        font-size: var(--font-xl);
        background: none;
        border: none;
        color: var(--text-primary);
        padding: var(--space-xs);
        cursor: pointer;
        margin-left: auto;
    }

    @media (max-width: 768px) {
        .nav {
            flex-direction: column;
            align-items: flex-start;
        }

        .nav ul {
            display: none;
            flex-direction: column;
            gap: var(--space-sm);
            margin-top: var(--space-sm);
        }

        .nav ul.open {
            display: flex;
        }

        .burger {
            display: block;
        }

        .nav li,
        .nav a {
            width: 100%;
        }

        .nav-item {
            transform: translateX(20px);
            animation: fadeLeft 0.4s ease forwards;
        }
    }

    @keyframes slideGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeLeft {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
    }
</style>
