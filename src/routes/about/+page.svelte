<script>
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';

    const principles = [
        { title: 'Know the Self', description: 'Understand your mind, body, and purpose.' },
        { title: 'Adaptability', description: 'Embrace constant change. Flow like water.' },
        { title: 'Emotional Control', description: 'Resist impulsive action and fear.' },
        { title: 'Presence of Mind', description: 'Stay calm. Focus on now.' },
        { title: 'Observation', description: 'Sharpen your senses to see what others miss.' },
        { title: 'Invisibility', description: 'Let go of ego. Blend with your surroundings.' },
        { title: 'Preparation', description: 'Always be ready. Anticipate challenges.' },
        { title: 'Decisiveness', description: 'Act swiftly. Trust your training.' },
        { title: 'Continuous Training', description: 'Refine your skills daily.' },
        { title: 'Respect Nature', description: 'Live in tune with the world around you.' },
        { title: 'Purposeful Living', description: 'Let values guide your path.' }
    ];

    const virtues = [
        { title: 'Gi – Rectitude', description: 'Do what is right by principle and justice.' },
        { title: 'Yū – Courage', description: 'Face danger with bravery and honour.' },
        { title: 'Jin – Benevolence', description: 'Show compassion and act for others.' },
        { title: 'Rei – Respect', description: 'Demonstrate courtesy and politeness.' },
        { title: 'Makoto – Honesty', description: 'Speak truth and act with integrity.' },
        { title: 'Meiyo – Honour', description: 'Uphold your reputation and values.' },
        { title: 'Chūgi – Loyalty', description: 'Be faithful to your word and duties.' }
    ];
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

<!--<section class="principles section-shinobi">
    <h2>11 Principles of the Shinobi</h2>
 </section>

<section class="virtues section-bushido">
    <h2>The 7 Virtues of Bushidō</h2>
  
</section> -->

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

<!--<section class="reflection section-quote" aria-labelledby="reflection-title">
	<div class="container">
		<h2 id="reflection-title">Reflections</h2>
		<blockquote>
			<p>
				“He who conquers himself is the mightiest warrior.”
			</p>
			<footer>— Confucius</footer>
		</blockquote>
	</div>
</section> -->


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

    /* Section: Hero */
    .section-hero {
      /*  background-image: url("/images/backgrounds/bamboo-enso-hero.png");*/
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: var(--color-background);
    }

    /* Section: Shinobi Principles */
    .section-shinobi {
        /* background-image: url("/images/backgrounds/kanji-grid.png"); */
        background-size: 650px;
        background-repeat: repeat;
        opacity: 0.95;
    }

    /* Section: Bushidō Virtues */
    .section-bushido {
       /* background-image: url("/images/backgrounds/parchment-scroll.png"); */
        background-size: 650px;
        background-repeat: repeat;
        opacity: 0.95;
    }

    /* Section: Gallery */
    .creators {
       /* background-image: url("/images/backgrounds/rice-texture.png"); */
        background-size: 800px;
        background-repeat: repeat;
        background-position: bottom center;
        opacity: 0.95;
    }

    /* Section: Quote or Reflection */
    .section-quote {
		/* background-image: url("/images/backgrounds/zen-garden-ripples.png"); */
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-blend-mode: overlay;
		background-color: var(--color-background);
		padding: var(--space-xl) var(--space-md);
		text-align: center;
	}

	.section-quote .container {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--space-lg);
		background:var(--color-background);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
		backdrop-filter: blur(3px);
	}

	.section-quote h2 {
		font-family: var(--font-heading);
		font-size: var(--font-xxl);
		margin-bottom: var(--space-md);
		color: var(--text-primary);
	}

	blockquote {
		font-family: var(--font-quote);
		font-style: italic;
		font-size: var(--font-lg);
		color: var(--color-background);
		margin: 0;
	}

	blockquote footer {
		margin-top: var(--space-sm);
		font-size: var(--font-sm);
		color: var(--color-background);
	}

    p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }

    .principle-grid,
    .virtue-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: var(--space-lg);
        /* Ensure it doesn’t stretch children weirdly */
        justify-content: center;
        /* Prevent cards from hugging full width on large screens */
        max-width: 1200px;
        margin: var(--space-md) auto;
        padding: 0 var(--space-sm);
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