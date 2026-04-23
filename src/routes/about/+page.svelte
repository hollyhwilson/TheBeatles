<script>
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';
</script>


<svelte:head>
    <title>About | Starter Kit</title>
</svelte:head>


<section class="intro section-hero">
    <h1>About Relevant</h1>
    <p>
        Relevant was developed in the hopes of making a news site that appeals to a
        more diverse demographic. In a world full of fake news, boring news, stupid news, relevant
        flips the pre-exisiting news site standards on their heads! In the first two years
        since starting the site we have won a multitude of awards, infact our work
        has been so influential that we were nominated for the nobel journalism prize for 2026!
        <br>
        <br>
        Our team is ever expanding as we have stayed dedicated to our goal to spread our journalism
        across every age! We want to bring back whimsy to journalism, get people excited to 
        read the news and be informed. 
        <br>
        <br>
        <br>
        <i>"Damn..they're so much better than us"</i> -New York Times
        <br>
        <br>
        <i>"I could never be her.."</i> -BBC news
        <br>
        <br>
        <i>"We're jobless and it's your fault. You're too good."</i> -Buzzfeed(rip)
    </p>
</section>

<section class="creators">
    <h2>The Creators</h2>
    <div class="grid">
        <figure>
            <figcaption>
                <h3> Holly </h3>
            </figcaption>

            <img src={asset("/images/about/holly.png")} alt="Holly!" />
        </figure>

        <figure>
            <figcaption>
               <h3> Prince </h3>
            </figcaption>

            <img src={asset("/images/about/prince.png")} alt="Prince!" />
        </figure>

        <p>I am the greatest journalist ever, from the moment I was born I knew I was destined to be the best at being a journalist.</p>

        <p>I think perchance, maybe I might have read the news one time when I was five, so yeah I'm extremely qualified.</p>
    </div>
</section>

<style>
    section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-background);
        border-radius: var(--radius-md);
        /*box-shadow: var(--shadow-sm);*/
        animation: fadeIn 0.6s ease-in;
    }

    section h1,
    section h2 {
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }

    section h2::after {
        content: "";
        display: block;
        height: 2px;
        width: 60px;
        margin: var(--space-xs) auto 0 auto;
        background: var(--color-accent);
        border-radius: var(--radius-sm);
    }

    .section-hero {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: var(--color-background);
    }

    .creators {
        background-size: 800px;
        background-repeat: repeat;
        background-position: bottom center;
        opacity: 0.95;
    }

    p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-lg);
        max-width: 1100px;
        margin: 0 auto;
    }

    figure {
        margin: 0;
        background: var(--color-background);
        border-radius: var(--radius-sm);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
    }

    figure img {
        width: 100%;
        height: auto;
        display: block;
    }

    figcaption {
        padding: var(--space-sm);
        font-size: var(--font-sm);
        color: var(--text-secondary);
        text-align: center;
        background: var(--color-background);
        font-style: italic;
    }

    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive tweaks */
    @media (max-width: 768px) 
    {
        .principle-grid,
        .virtue-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        .principle-grid::after,
        .virtue-grid::after {
            content: "";
            visibility: hidden;
            height: 0;
            width: 180px; /* match min-width of grid items */
        }

        .grid {
            grid-template-columns: 1fr;
        }

        section h1, section h2 {
            font-size: var(--font-lg);
        }
    }

</style>