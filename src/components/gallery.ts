import type { Miniature, GalleryFilter } from '../types/index.js';
import { miniatures } from '../data/miniatures.js';

// ─── Painting Style Descriptions ─────────────────────────────────────────────

const STYLE_DESCRIPTIONS: Record<string, string> = {
  'NMM':          'Non-Metallic Metal: simular metal con pinturas mate',
  'TMM':          'True Metallic Metal: usar pinturas metálicas reales',
  'OSL':          'Object Source Lighting: simular luz emitida por un objeto',
  'Zenithal':     'Iluminación desde arriba, como si el sol cayera vertical',
  'Wet Blending': 'Mezclar colores húmedos sobre la miniatura para transiciones suaves',
  'Layering':     'Capas finas de color progresivamente más claro',
  'Drybrushing':  'Pincel casi seco para resaltar texturas y relieves',
  'Speed Paint':  'Pinturas con sombreado integrado, una capa hace luz y sombra',
};


// ─── Filter Logic ─────────────────────────────────────────────────────────────

export function filterMiniatures(filter: GalleryFilter): Miniature[] {
  return miniatures.filter(mini => {
    if (filter.faction && mini.faction !== filter.faction) return false;
    if (filter.style && !mini.paintingStyles.includes(filter.style)) return false;
    if (filter.difficulty && mini.difficulty !== filter.difficulty) return false;
    if (filter.featured !== undefined && mini.featured !== filter.featured) return false;
    if (filter.searchQuery) {
      const q = filter.searchQuery.toLowerCase();
      const searchFields = [
        mini.name,
        mini.description,
        mini.manufacturer,
        mini.faction,
        ...mini.tags,
        ...(mini.paintingStyles),
      ].join(' ').toLowerCase();
      if (!searchFields.includes(q)) return false;
    }
    return true;
  });
}

// ─── Card Renderer ─────────────────────────────────────────────────────────────

export function renderMiniatureCard(mini: Miniature): HTMLElement {
  const card = document.createElement('article');
  card.className = 'miniature-card';
  card.setAttribute('data-id', mini.id);

  const difficultyColors: Record<string, string> = {
    Principiante: '#4caf50',
    Intermedio: '#ff9800',
    Avanzado: '#f44336',
    Experto: '#9c27b0',
  };

  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0ebe1'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23c0a882' font-family='serif' font-size='18'%3EAquí irá tu%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23c0a882' font-family='serif' font-size='18'%3Eminiatura%3C/text%3E%3C/svg%3E`;

  card.innerHTML = `
    <div class="card-image-wrapper">
      <img
        class="card-image"
        src="${mini.imageUrl}"
        alt="${mini.name}"
        loading="lazy"
        onerror="this.src='${placeholderSvg}'"
      />
      ${mini.featured ? '<span class="badge-featured">★ Destacada</span>' : ''}
      <div class="card-overlay">
        <button class="btn-view" data-id="${mini.id}">Ver detalles</button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="faction-tag">${mini.faction}</span>
        <span class="difficulty-tag" style="background:${difficultyColors[mini.difficulty]}22; color:${difficultyColors[mini.difficulty]}; border-color:${difficultyColors[mini.difficulty]}44">
          ${mini.difficulty}
        </span>
      </div>
      <h3 class="card-title">${mini.name}</h3>
      <p class="card-manufacturer">${mini.manufacturer}</p>
      <p class="card-description">${mini.description}</p>
      <div class="card-styles">
        ${mini.paintingStyles.map(s => `<span class="style-chip" title="${STYLE_DESCRIPTIONS[s] ?? s}">${s}</span>`).join('')}
      </div>
      ${mini.hoursSpent ? `<p class="card-hours">⏱ ${mini.hoursSpent}h de trabajo</p>` : ''}
    </div>
  `;

  return card;
}

// ─── Modal Renderer ─────────────────────────────────────────────────────────────

export function renderMiniatureModal(mini: Miniature): void {
  const existing = document.getElementById('miniature-modal');
  if (existing) existing.remove();

  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0ebe1'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23c0a882' font-family='serif' font-size='16'%3ESin imagen%3C/text%3E%3C/svg%3E`;

  const allImages = [mini.imageUrl, ...(mini.galleryImages ?? [])];

  const modal = document.createElement('div');
  modal.id = 'miniature-modal';
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-content" role="dialog" aria-modal="true" aria-label="${mini.name}">
      <div class="modal-topbar">
        <div class="modal-topbar-left">
          <span class="faction-tag">${mini.faction}</span>
          ${mini.featured ? '<span class="badge-featured">★ Destacada</span>' : ''}
        </div>
        <button class="modal-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="modal-grid">
        <div class="modal-gallery">
          <img
            id="modal-main-img"
            class="modal-main-image"
            src="${mini.imageUrl}"
            alt="${mini.name}"
            onerror="this.src='${placeholderSvg}'"
          />
          ${allImages.length > 1 ? `
            <div class="modal-thumbnails">
              ${allImages.map((img, i) => `
                <img
                  class="modal-thumb ${i === 0 ? 'active' : ''}"
                  src="${img}"
                  alt="Vista ${i + 1}"
                  data-src="${img}"
                  onerror="this.src='${placeholderSvg}'"
                />
              `).join('')}
            </div>
          ` : ''}
        </div>
        <div class="modal-info">
          <h2 class="modal-title">${mini.name}</h2>
          <p class="modal-manufacturer">${mini.manufacturer}</p>
          ${mini.lore ? `<blockquote class="modal-lore">"${mini.lore}"</blockquote>` : ''}
          <p class="modal-description">${mini.description}</p>

          <div class="modal-stats">
            <div class="stat"><span class="stat-label">Dificultad</span><span class="stat-value">${mini.difficulty}</span></div>
            ${mini.hoursSpent ? `<div class="stat"><span class="stat-label">Tiempo</span><span class="stat-value">${mini.hoursSpent} horas</span></div>` : ''}
            <div class="stat"><span class="stat-label">Completada</span><span class="stat-value">${new Date(mini.completedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}</span></div>
          </div>

          <div class="modal-section">
            <h4>Técnicas usadas</h4>
            <div class="card-styles">
              ${mini.paintingStyles.map(s => `<span class="style-chip" data-tooltip="${STYLE_DESCRIPTIONS[s] ?? s}">${s}</span>`).join('')}
            </div>
            
          </div>

          ${mini.paints && mini.paints.length > 0 ? `
            <div class="modal-section">
              <h4>Pinturas empleadas</h4>
              <ul class="paints-list">
                ${mini.paints.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div class="modal-section">
            <div class="tags-row">
              ${mini.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);


  // Close handlers
  modal.querySelector('.modal-close')!.addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  
  // Keyboard navigation
  let currentIndex = 0;
  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', onKey);
    }
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % allImages.length;
      switchImage(currentIndex);
    }
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      switchImage(currentIndex);
    }
  });

  function switchImage(index: number): void {
    const mainImg = document.getElementById('modal-main-img') as HTMLImageElement;
    if (mainImg) mainImg.src = allImages[index];
    modal.querySelectorAll('.modal-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  // Thumbnail switching
  modal.querySelectorAll('.modal-thumb').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLImageElement;
      const mainImg = document.getElementById('modal-main-img') as HTMLImageElement;
      mainImg.src = target.dataset['src'] ?? '';
      modal.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      target.classList.add('active');
    });
  });

  // Animate in
  requestAnimationFrame(() => modal.classList.add('open'));
}
