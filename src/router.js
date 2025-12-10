// src/router.js

// Base path from Vite:
// - dev: "/"
// - GitHub Pages with base: "/hank-and-yu-site/"
// - custom domain at root: "/"
const RAW_BASE = import.meta.env.BASE_URL || "/";
const BASE = RAW_BASE === "/" ? "/" : RAW_BASE.replace(/\/+$/, "");

function normalizeInternal(path) {
  let p = path || "/";

  if (!p.startsWith("/")) {
    p = "/" + p;
  }

  // Remove trailing slash except for root
  if (p.length > 1 && p.endsWith("/")) {
    p = p.slice(0, -1);
  }

  return p;
}

// Turn a full pathname into internal route: "/", "/about", "/contact"
function stripBase(pathname) {
  let p = pathname || "/";

  if (!p.startsWith("/")) {
    p = "/" + p;
  }

  if (BASE !== "/" && p.startsWith(BASE)) {
    p = p.slice(BASE.length);
    if (!p.startsWith("/")) {
      p = "/" + p;
    }
  }

  return normalizeInternal(p);
}

export function getCurrentPath() {
  return stripBase(window.location.pathname);
}

export function navigate(path) {
  const internal = normalizeInternal(path);

  let full;
  if (BASE === "/" || BASE === "") {
    full = internal; // e.g. "/contact"
  } else {
    // e.g. BASE "/hank-and-yu-site" + "/contact" => "/hank-and-yu-site/contact"
    full = BASE + (internal === "/" ? "" : internal);
  }

  // Simple, reliable navigation: full page load
  window.location.href = full;
}
