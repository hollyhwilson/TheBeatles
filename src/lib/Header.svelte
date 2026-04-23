<script>
    import { asset } from '$app/paths';
    import Navigation from './Navigation.svelte';
</script>  


<header class="header">
    <div class="logo-area">
        <div class="social-area">
            <div class="social-container">

            </div>
            <div class="profile-container">

            </div>
        </div>
       
        <div class="title-search-container">
            <h1>RELEVANT</h1>
        </div>
    </div>
    
    <Navigation />
</header>


<style>
    .header {
        display: block;
        justify-content: space-between;
        align-items: center;
       /* padding: 0 var(--space-lg);*/
        background-color: var(--color-surface);
        /*box-shadow: var(--shadow-md);*/
       /* border-bottom: var(--border-default); */
        position: relative;
        z-index: 100;
    }

    .logo-area {
        display: block;
        align-items: center;
        gap: var(--space-sm);
        font-family: var(--font-heading);
    }

    .logo-area h1 {
        margin: 20px;
        margin-top: 0px;
        text-align: center;
        font-size: var(--font-logo);
        font-weight: 700;
        background: var(--color-heading-title);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height:2;
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
