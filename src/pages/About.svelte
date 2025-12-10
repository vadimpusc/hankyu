<section class="about">
  <div class="about-card">

    <div class="about-media">
      <div class="about-photo"></div>
    </div>

    <div class="about-body">
      <p>
        We are a couple who met in London and decided to document our life together on YouTube.
        From weekend escapes to quiet days at home, our channel is a diary
        of the places we visit and the moments we want to remember.
      </p>
      <p>
        Our videos mix travel with honest conversation and small everyday details.
        We love discovering spots that feel special, returning to places that feel like home,
        and showing what it is really like to live between two cultures.
      </p>
      <p>
        If you enjoy travel, couple vlogs, and stories that grow over time, you are
        in the right place. Thank you for being here with us.
      </p>
    </div>
  </div>
</section>

<style>
  .about {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .about-card {
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.96);
    padding: 2.4rem 2.6rem;
    box-shadow: var(--shadow-soft);
    border: 1px solid rgba(148, 163, 184, 0.3);
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.5fr);
    gap: 2.4rem;
    align-items: center;
  }

  .about-media {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .about-photo {
    width: 100%;
    max-width: 420px;
    aspect-ratio: 1 / 1;
    border-radius: 24px;
    background-image: url("/assets/hank-and-yu-about.jpg");
    background-size: cover;
    background-position: center;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.35);
  }

  .about-body {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .about-body h1 {
    margin: 0 0 0.6rem;
    font-size: clamp(1.9rem, 1.7vw + 1.5rem, 2.3rem);
    letter-spacing: -0.02em;
  }

  .about-body p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.98rem;
    line-height: 1.8;
  }

  /* Tablet & Mobile - Image Top + Center */
  @media (max-width: 840px) {
    .about-card {
      grid-template-columns: minmax(0, 1fr);
      padding: 2.1rem 2rem;
      justify-items: center;
      text-align: center;
    }

    .about-body {
      text-align: center;
    }

    .about-photo {
      max-width: 360px;
    }
  }

  @media (max-width: 540px) {
    .about-card {
      padding: 1.8rem 1.4rem;
      border-radius: 24px;
    }

    .about-photo {
      max-width: 320px;
    }
  }
</style>
