<script>
  import { onMount } from "svelte";
  import { getCurrentPath, navigate } from "./router";

  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";

  let currentPath = getCurrentPath();

  const routes = {
    "/": Home,
    "/about": About,
    "/contact": Contact
  };

  $: CurrentPage = routes[currentPath] || Home;

  function handleNav(path) {
    navigate(path);
    currentPath = getCurrentPath();
  }

  onMount(() => {
    const onPop = () => {
      currentPath = getCurrentPath();
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  });
</script>


<div class="page">
  <header class="site-header">
    <div class="brand" on:click={() => handleNav("/")}>
     <img src="/assets/hy.png" alt="Hank and Yu" class="brand-logo" />
      <span class="brand-text">Hank and Yu</span>
    </div>

    <nav class="main-nav">
      <button
        type="button"
        class:active={currentPath === "/"}
        on:click={() => handleNav("/")}
      >
        Home
      </button>

      <button
        type="button"
        class:active={currentPath === "/about"}
        on:click={() => handleNav("/about")}
      >
        About
      </button>

      <button
        type="button"
        class:active={currentPath === "/contact"}
        on:click={() => handleNav("/contact")}
      >
        Contact
      </button>

      <a
        class="shop-link"
        href="/"
        rel="noopener"
      >
        Shop
      </a>
    </nav>
  </header>

  <main class="site-main">
    <svelte:component this={CurrentPage} />
  </main>

  <footer class="site-footer">
    <p>Hank and Yu © {new Date().getFullYear()} All Rights Reserved</p>
    <p><a href="https://sanrokuku.com/services" target="_blank" rel="noopener">Web Design by San Roku Ku</a></p>
  </footer>
</div>

<style>
.brand-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover; /* ensures face/photo stays centered */
  display: block;
}

  :global(:root) {
    --bg-page: #f9fafb;
    --bg-card: #ffffff;
    --bg-pill: #f97316;
    --bg-pill-soft: rgba(249, 115, 22, 0.06);
    --accent: #f97316;
    --accent-soft: #fed7aa;
    --accent-strong: #ea580c;
    --accent-contrast: #111827;
    --text-main: #0f172a;
    --text-muted: #6b7280;
    --border-subtle: #e5e7eb;
    --shadow-soft: 0 28px 60px rgba(15, 23, 42, 0.15);
    --radius-lg: 26px;
    --radius-md: 16px;
    --radius-pill: 999px;
    --nav-height: 76px;
    --font-ui: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
      "Segoe UI", sans-serif;
  }

  :global(body) {
    margin: 0;
    font-family: var(--font-ui);
    color: var(--text-main);
    background: radial-gradient(circle at top left, #bfdbfe 0, #f9fafb 46%, #ffedd5 100%);
-webkit-font-smoothing: antialiased;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(16px);
    background: rgba(249, 250, 251, 0.75);
    border-bottom: 1px solid rgba(229, 231, 235, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 5vw;
  }

  .brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
}


  .brand-mark {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 20%, #fed7aa, #f97316);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #111827;
    font-size: 0.9rem;
    box-shadow: 0 12px 30px rgba(248, 113, 113, 0.65);
  }

  .brand-text {
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.95rem;
  }

  .main-nav button {
    border: none;
    background: transparent;
    font: inherit;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.35rem 0;
    transition: color 150ms ease;
  }

  .main-nav button.active {
    color: var(--text-main);
    font-weight: 600;
  }

  .shop-link {
    padding: 0.5rem 1.1rem;
    border-radius: var(--radius-pill);
    border: 1px solid rgba(15, 23, 42, 0.08);
    background: linear-gradient(135deg, #111827, #020617);
    color: #f9fafb;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.45);
    transition: 160ms ease;
  }

  .site-main {
    flex: 1;
    padding: 3.6rem 5vw 3.2rem;
    display: flex;
    justify-content: center;
  }

  .site-footer {
    padding: 1.6rem 5vw 2.2rem;
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .site-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .main-nav {
      width: 100%;
      justify-content: flex-start;
      gap: 1.1rem;
      flex-wrap: wrap;
    }

    .site-main {
      padding-top: 2.4rem;
    }
  }
</style>
