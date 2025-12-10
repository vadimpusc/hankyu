<section class="contact">
  <div class="contact-card">
    <p class="label">Business and collaboration</p>
    <h1>Contact Us</h1>
    <p class="body">
      For sponsorships or other questions, please reach out by email.
      We read every message even if we cannot reply to all of them.
    </p>

    <a href="mailto:hello@hankandyu.com" class="email">
      hello@hankandyu.com
    </a>
  </div>
</section>

<style>
  .contact {
    width: 100%;
    max-width: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-card {
    width: 100%;
    border-radius: 28px;
    padding: 2.6rem 2.2rem;
    text-align: center;
    background: radial-gradient(circle at top, #fee2e2, #ffffff 46%, #dbeafe 100%);
    box-shadow: var(--shadow-soft);
    border: 1px solid rgba(148, 163, 184, 0.35);
  }

  .label {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.75rem;
    color: #9ca3af;
    margin: 0 0 0.7rem;
  }

  h1 {
    margin: 0 0 0.9rem;
    font-size: clamp(1.8rem, 1.4vw + 1.5rem, 2.1rem);
    letter-spacing: -0.02em;
  }

  .body {
    margin: 0 0 1.6rem;
    color: var(--text-muted);
    font-size: 0.96rem;
    line-height: 1.8;
  }

  .email {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.6rem;
    border-radius: 999px;
    background: #111827;
    color: #f9fafb;
    font-weight: 600;
    font-size: 0.97rem;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(15, 23, 42, 0.7);
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      background 160ms ease;
  }

  .email:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 55px rgba(15, 23, 42, 0.95);
    background: #020617;
  }

  @media (max-width: 540px) {
    .contact-card {
      padding: 2.2rem 1.5rem;
      border-radius: 22px;
    }
  }
</style>