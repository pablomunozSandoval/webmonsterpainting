import type { GalleryFilter, Faction, PaintingStyle, DifficultyLevel } from './types/index.js';
import { siteConfig, getUniqueFactions, getUniquePaintingStyles, getFeaturedMiniatures } from './data/miniatures.js';
import { filterMiniatures, renderMiniatureCard, renderMiniatureModal } from './components/gallery.js';

// ─── State ────────────────────────────────────────────────────────────────────

let currentFilter: GalleryFilter = {};

// ─── DOM References ──────────────────────────────────────────────────────────

const galleryGrid = document.getElementById('gallery-grid') as HTMLDivElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const factionSelect = document.getElementById('filter-faction') as HTMLSelectElement;
const styleSelect = document.getElementById('filter-style') as HTMLSelectElement;
const difficultySelect = document.getElementById('filter-difficulty') as HTMLSelectElement;
const featuredToggle = document.getElementById('filter-featured') as HTMLInputElement;
const resultCount = document.getElementById('result-count') as HTMLSpanElement;
const statsTotal = document.getElementById('stat-total') as HTMLSpanElement;
const statsFeatured = document.getElementById('stat-featured') as HTMLSpanElement;

// ─── Init ─────────────────────────────────────────────────────────────────────

function init(): void {
  // Set site config text
  const authorNameEls = document.querySelectorAll('[data-author-name]');
  authorNameEls.forEach(el => el.textContent = siteConfig.authorName);

  const taglineEl = document.querySelector('[data-tagline]');
  if (taglineEl) taglineEl.textContent = siteConfig.tagline;

  const bioEl = document.querySelector('[data-bio]');
  if (bioEl) bioEl.textContent = siteConfig.bio;

  // Populate filter dropdowns
  populateFilters();

  // Stats
  const allMinis = filterMiniatures({});
  if (statsTotal) statsTotal.textContent = String(allMinis.length);
  if (statsFeatured) statsFeatured.textContent = String(getFeaturedMiniatures().length);

  // Render initial gallery
  renderGallery();

  // Event listeners
  searchInput?.addEventListener('input', debounce(onFilterChange, 250));
  factionSelect?.addEventListener('change', onFilterChange);
  styleSelect?.addEventListener('change', onFilterChange);
  difficultySelect?.addEventListener('change', onFilterChange);
  featuredToggle?.addEventListener('change', onFilterChange);

  const resetBtn = document.getElementById('reset-filters');
  resetBtn?.addEventListener('click', resetFilters);

  // Social links
  Object.entries(siteConfig.socialLinks).forEach(([key, url]) => {
    const link = document.getElementById(`social-${key}`) as HTMLAnchorElement | null;
    if (link && url) {
      link.href = url;
      link.style.display = 'inline-flex';
    }
  });
}

// ─── Filters ──────────────────────────────────────────────────────────────────

function populateFilters(): void {
  const factions = getUniqueFactions();
  factions.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f;
    opt.textContent = f;
    factionSelect?.appendChild(opt);
  });

  const styles = getUniquePaintingStyles();
  styles.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    styleSelect?.appendChild(opt);
  });
}

function onFilterChange(): void {
  currentFilter = {
    searchQuery: searchInput?.value.trim() || undefined,
    faction: (factionSelect?.value as Faction) || undefined,
    style: (styleSelect?.value as PaintingStyle) || undefined,
    difficulty: (difficultySelect?.value as DifficultyLevel) || undefined,
    featured: featuredToggle?.checked ? true : undefined,
  };
  renderGallery();
}

function resetFilters(): void {
  if (searchInput) searchInput.value = '';
  if (factionSelect) factionSelect.value = '';
  if (styleSelect) styleSelect.value = '';
  if (difficultySelect) difficultySelect.value = '';
  if (featuredToggle) featuredToggle.checked = false;
  currentFilter = {};
  renderGallery();
}

// ─── Gallery Render ───────────────────────────────────────────────────────────

function renderGallery(): void {
  const results = filterMiniatures(currentFilter);

  if (resultCount) {
    resultCount.textContent = `${results.length} miniatura${results.length !== 1 ? 's' : ''}`;
  }

  galleryGrid.innerHTML = '';

  if (results.length === 0) {
    galleryGrid.innerHTML = `
      <div class="empty-state">
        <p class="empty-icon">🐉</p>
        <p>No se encontraron miniaturas con esos filtros.</p>
        <button onclick="document.getElementById('reset-filters')?.click()">Limpiar filtros</button>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();
  results.forEach((mini, i) => {
    const card = renderMiniatureCard(mini);
    card.style.animationDelay = `${i * 60}ms`;
    card.querySelector('.btn-view')?.addEventListener('click', () => {
      renderMiniatureModal(mini);
    });
    fragment.appendChild(card);
  });

  galleryGrid.appendChild(fragment);
}

// ─── Utils ────────────────────────────────────────────────────────────────────

function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', init);
