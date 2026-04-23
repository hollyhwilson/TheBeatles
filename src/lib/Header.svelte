<script>
    import { asset } from '$app/paths';
    import Navigation from './Navigation.svelte';
</script>  


<header class="header">
    <div class="logo-area">
        <div class="social-area">
            <a href=https://www.facebook.com><img src={asset("/images/header/facebook_logo.png")} alt="Facebook logo" /></a>
            <a href=https://www.x.com><img src={asset("/images/header/twitter_logo.png")} alt="Twitter logo" /></a>
        </div>

        <div class="corner-right">
            <img src={asset("/images/header/star.png")} alt="doodled star" />
        </div>
       
        <div class="logo">
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

    .social-area {
        display: inline-flex;
        flex-direction: row;
        max-width: 200px;
        padding: 20px;
        padding-bottom: 0px;
        gap: 10px;
    }

    .social-area img {
        max-width: 60px;
        height: auto;
        width: auto;
        animation: fadeInTitle 0.6s ease forwards;
    }

    .corner-right {
        display: inline-block;
        right: 0;
        max-width: 100px;
        padding: 20px;
        padding-bottom: 0px;
        position: absolute;
    }

    .corner-right img {
        max-width: 60px;
        height: auto;
        width: auto;
        animation: fadeInTitle 0.6s ease forwards;
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
        margin-bottom: 0px;
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
