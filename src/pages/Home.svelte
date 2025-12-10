<script>
  function handleSubscribe() {
    window.open("https://www.youtube.com/@HankAndYu", "_blank", "noopener");
  }
</script>

<section class="hero">
  <div class="hero-card">
    <div class="hero-media">
      <div class="hero-photo-frame">
        <div class="hero-photo"></div>
      </div>
      <div class="hero-pill hero-pill-top">
        <span class="dot live"></span>
        New videos weekly!
      </div>
      <div class="hero-pill hero-pill-bottom">
        <span class="stat-number">1000</span>
        <span class="stat-label">subscriber goal!</span>
      </div>
    </div>

    <div class="hero-content">
      <p class="eyebrow">Travel couple on YouTube</p>
      <h1>Couple Story + Cultural Journey</h1>
      <p class="lead">
      We’re a couple and family vlog traveling between Europe and Japan.
We love discovering new places and sharing the slow moments that make travel meaningful - beachfront sunsets, train-window views, spontaneous detours, and cozy mornings with coffee.
      </p>

      <div class="hero-actions">
        <button type="button" class="primary-cta" on:click={handleSubscribe}>
          Subscribe on YouTube
        </button>

        <div class="meta">
          <p class="meta-title">What you can expect:</p>
          <ul>
            <li>Honest travel vlogs</li>
            <li>Road trips</li>
            <li>The quiet beauty of everyday life</li>
                        <li>Family time</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    width: 100%;
    max-width: 1120px;
  }

  .hero-card {
    background: radial-gradient(circle at top left, #fef3c7, #ffffff 42%, #dbeafe 100%);
    border-radius: 32px;
    padding: 2.8rem 3rem;
    box-shadow: var(--shadow-soft);
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.3fr);
    gap: 2.8rem;
    border: 1px solid rgba(148, 163, 184, 0.25);
    position: relative;
    overflow: hidden;
  }

.hero-media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-photo-frame {
  width: 100%;
  max-width: 320px;       /* or 360 / 400, whatever you like */
  border-radius: 30px;
  padding: 0.5rem;
  background: linear-gradient(145deg, rgba(248, 250, 252, 0.85), rgba(254, 215, 170, 0.95));
  box-shadow: 0 22px 45px rgba(15, 23, 42, 0.35);
}

.hero-photo {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 24px;
  background-image: url("/assets/hankyu-hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}



  .hero-pill {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 0.9rem;
    border-radius: var(--radius-pill);
    background: rgba(15, 23, 42, 0.85);
    color: #f9fafb;
    font-size: 0.8rem;
    box-shadow: 0 16px 35px rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(14px);
    white-space: nowrap;
  }

  .hero-pill-top {
    top: 1.4rem;
    right: -0.4rem;
  }

  .hero-pill-bottom {
    bottom: 1.6rem;
    left: -0.2rem;
    background: rgba(248, 250, 252, 0.9);
    color: #111827;
    gap: 0.5rem;
  }

  .dot.live {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #22c55e;
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.35);
  }

  .stat-number {
    font-weight: 700;
    font-size: 0.95rem;
  }

  .stat-label {
    font-size: 0.8rem;
    color: #4b5563;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.22rem 0.7rem;
    border-radius: var(--radius-pill);
    background: var(--bg-pill-soft);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent-strong);
    align-self: flex-start;
  }

  h1 {
    font-size: clamp(2.1rem, 2.4vw + 1.8rem, 2.8rem);
    line-height: 1.06;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .lead {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.98rem;
    max-width: 32rem;
  }

  .hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    margin-top: 0.5rem;
  }

  .primary-cta {
    align-self: center;
    padding: 0.9rem 1.6rem;
    margin-bottom: 1.2rem;
    border-radius: var(--radius-pill);
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--accent-contrast);
    background: linear-gradient(135deg, #f97316, #fb7185);
    box-shadow: 0 10px 45px rgba(248, 113, 113, 0.7);
    transform: translateY(0);
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      filter 160ms ease;
  }

  .primary-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 55px rgba(248, 113, 113, 0.85);
    filter: brightness(1.03);
  }

  .meta {
    padding: 0.9rem 1.1rem;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.84);
    border: 1px solid rgba(229, 231, 235, 0.8);
  }

  .meta-title {
    margin: 0 0 0.4rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #9ca3af;
    font-weight: 600;
  }

  .meta ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.2rem;
    font-size: 0.9rem;
    color: #4b5563;
  }

  .meta li::before {
    content: "•";
    color: #f97316;
    margin-right: 0.4rem;
  }

  @media (max-width: 900px) {
    .hero-card {
      grid-template-columns: minmax(0, 1fr);
      padding: 2.2rem 1.8rem;
    }

    .hero-media {
      order: -1;
    }

    .hero-photo {
      aspect-ratio: 16 / 10;
    }

    .hero-pill-top {
      right: 1rem;
    }

    .hero-pill-bottom {
      left: 0.8rem;
    }
  }

  @media (max-width: 540px) {
    .hero-card {
      padding: 1.7rem 1.3rem;
      border-radius: 24px;
    }

    h1 {
      font-size: 1.9rem;
    }

    .meta {
      padding: 0.8rem 0.85rem;
    }
  }
</style>