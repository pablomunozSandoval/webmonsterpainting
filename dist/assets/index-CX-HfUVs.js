(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=o(a);fetch(a.href,t)}})();const g={authorName:"Monster Painting",tagline:"El pincel es el arma. La miniatura, el campo de batalla.",bio:"Pintor de miniaturas de fantasía medieval apasionado por dar vida a pequeñas obras de arte. Cada miniatura cuenta una historia.",socialLinks:{instagram:"https://instagram.com",reddit:"https://reddit.com/r/minipainting"}},f=[{id:"monstruo-001",name:"Leshen",manufacturer:"Go on Board",faction:"Relictos",description:"Monstruo del bosque con cuerpo de árbol, cuernos y ramas.",lore:"Los leshens habitan en bosques densos y primitivos. Criaturas ferozmente territoriales, cazan con sigilo y astucia siendo solitarios como únicos compañeros animales y seres debiles de mente.",imageUrl:"/images/Witcher/Leshen - Old World (1).jpg",galleryImages:["/images/Witcher/Leshen - Old World (3).jpg","/images/Witcher/Leshen - Old World (4).jpg","/images/Witcher/Leshen - Old World (2).jpg"],paintingStyles:["Layering","NMM","Drybrushing"],difficulty:"Intermedio",hoursSpent:15,completedAt:"2024-09-15",paints:[],featured:!0,tags:["leshen","monstruo","naturaleza","espiritu","witcher","old world"]},{id:"monstruo-002",name:"Ciclope",manufacturer:"Go on Board",faction:"Relictos",description:"Gigante de un solo ojo, con piel gruesa y aspecto deforme.",lore:"Los cíclopes pueden reconocerse fácilmente por el único ojo ubicado en el centro de sus frentes. Si por alguna razón esto no es visible, otras señales reveladoras son su enorme tamaño, su increíble fuerza y un odio hirviente hacia todos los humanos.",imageUrl:"/images/Witcher/Ciclope -Old World (3).jpg",galleryImages:["/images/Witcher/Ciclope -Old World (4).jpg","/images/Witcher/Ciclope -Old World (1).jpg","/images/Witcher/Ciclope -Old World (2).jpg"],paintingStyles:["Layering","NMM","Wet Blending"],difficulty:"Intermedio",hoursSpent:18,completedAt:"2024-09-03",paints:[],featured:!0,tags:["ciclope","relicto","gigante","witcher","old world","piel"]},{id:"humanoide-001",name:"50th Anniversary Dwarf",manufacturer:"D&D Nolzurs Marvelous",faction:"Enanos",description:"Una enana con armadura pesada, maza de guerra, cabello tomado.",lore:"Valientes y resistentes, los enanos son conocidos por ser habilidosos guerreros, mineros y artesanos de la piedra y el metal. Aunque miden menos de 5 pies (1,5 m), los enanos son tan anchos y compactos que pueden pesar tanto como un humano con dos pies más de altura.",imageUrl:"/images/Nolzurs/Enana - Workshop (3).jpg",galleryImages:["/images/Nolzurs/Enana - Workshop (1).jpg","/images/Nolzurs/Enana - Workshop (2).jpg","/images/Nolzurs/Enana - Workshop (4).jpg"],paintingStyles:["OSL","Wet Blending","Zenithal"],difficulty:"Principiante",hoursSpent:8,completedAt:"2025-06-20",paints:[],featured:!1,tags:["enano","guerrero","dnd","Nolzur","humanoide"]},{id:"monstruo-003",name:"Manticora",manufacturer:"Go on Board",faction:"Bestia",description:"Una criatura con cuerpo de león, alas de murciélago y cola de escorpión.",lore:"Las mantícoras son bestias feroces y peligrosas que habitan en regiones desérticas y montañosas. Son conocidas por su velocidad, agilidad y su capacidad para lanzar ataques venenosos con su cola de escorpión. Las mantícoras son cazadores solitarios que se alimentan de presas vivas, utilizando sus garras afiladas y su mordida poderosa para derribar a sus víctimas.",imageUrl:"/images/Witcher/Manticora - Old World (1).jpg",galleryImages:["/images/Witcher/Manticora - Old World (2).jpg","/images/Witcher/Manticora - Old World (3).jpg","/images/Witcher/Manticora - Old World (4).jpg","/images/Witcher/Manticora - Old World (5).jpg","/images/Witcher/Manticora - Old World (6).jpg"],paintingStyles:["Layering","Wet Blending","NMM"],difficulty:"Intermedio",hoursSpent:15,completedAt:"2025-01-10",paints:[],featured:!1,tags:["bestia","monstruo","desierto","montaña","witcher","old world"]},{id:"monstruo-004",name:"Ghoul",manufacturer:"Go on Board",faction:"Bestia",description:"Una criatura humanoide con piel pálida, garras afiladas",lore:"Se dice que los ghouls fueron humanos que una vez fueron obligados al canibalismo y, después de muchos años pasados en criptas oscuras, experimentaron una transformación horrible. Sólo la carne humana puede satisfacer su hambre maligna eterna, por eso matan gente y almacenan los restos en los rincones de sus guaridas.",imageUrl:"/images/Witcher/Ghoul - Old World (1).jpg",galleryImages:["/images/Witcher/Ghoul - Old World (2).jpg","/images/Witcher/Ghoul - Old World (3).jpg"],paintingStyles:["Layering","NMM","Wet Blending","Speed Paint"],difficulty:"Principiante",hoursSpent:7,completedAt:"2025-02-10",paints:[],featured:!1,tags:["bestia","monstruo","desierto","montaña","witcher","old world"]}],S=()=>[...new Set(f.map(e=>e.faction))],w=()=>[...new Set(f.flatMap(e=>e.paintingStyles))],j=()=>f.filter(e=>e.featured),L={NMM:"Non-Metallic Metal: simular metal con pinturas mate",TMM:"True Metallic Metal: usar pinturas metálicas reales",OSL:"Object Source Lighting: simular luz emitida por un objeto",Zenithal:"Iluminación desde arriba, como si el sol cayera vertical","Wet Blending":"Mezclar colores húmedos sobre la miniatura para transiciones suaves",Layering:"Capas finas de color progresivamente más claro",Drybrushing:"Pincel casi seco para resaltar texturas y relieves","Speed Paint":"Pinturas con sombreado integrado, una capa hace luz y sombra"};function C(e){return f.filter(s=>{if(e.faction&&s.faction!==e.faction||e.style&&!s.paintingStyles.includes(e.style)||e.difficulty&&s.difficulty!==e.difficulty||e.featured!==void 0&&s.featured!==e.featured)return!1;if(e.searchQuery){const o=e.searchQuery.toLowerCase();if(![s.name,s.description,s.manufacturer,s.faction,...s.tags,...s.paintingStyles].join(" ").toLowerCase().includes(o))return!1}return!0})}function x(e){const s=document.createElement("article");s.className="miniature-card",s.setAttribute("data-id",e.id);const o={Principiante:"#4caf50",Intermedio:"#ff9800",Avanzado:"#f44336",Experto:"#9c27b0"},n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0ebe1'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23c0a882' font-family='serif' font-size='18'%3EAquí irá tu%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23c0a882' font-family='serif' font-size='18'%3Eminiatura%3C/text%3E%3C/svg%3E";return s.innerHTML=`
    <div class="card-image-wrapper">
      <img
        class="card-image"
        src="${e.imageUrl}"
        alt="${e.name}"
        loading="lazy"
        onerror="this.src='${n}'"
      />
      ${e.featured?'<span class="badge-featured">★ Destacada</span>':""}
      <div class="card-overlay">
        <button class="btn-view" data-id="${e.id}">Ver detalles</button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="faction-tag">${e.faction}</span>
        <span class="difficulty-tag" style="background:${o[e.difficulty]}22; color:${o[e.difficulty]}; border-color:${o[e.difficulty]}44">
          ${e.difficulty}
        </span>
      </div>
      <h3 class="card-title">${e.name}</h3>
      <p class="card-manufacturer">${e.manufacturer}</p>
      <p class="card-description">${e.description}</p>
      <div class="card-styles">
        ${e.paintingStyles.map(a=>`<span class="style-chip" title="${L[a]??a}">${a}</span>`).join("")}
      </div>
      ${e.hoursSpent?`<p class="card-hours">⏱ ${e.hoursSpent}h de trabajo</p>`:""}
    </div>
  `,s}function O(e){const s=document.getElementById("miniature-modal");s&&s.remove();const o="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0ebe1'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23c0a882' font-family='serif' font-size='16'%3ESin imagen%3C/text%3E%3C/svg%3E",n=[e.imageUrl,...e.galleryImages??[]],a=document.createElement("div");a.id="miniature-modal",a.className="modal-backdrop",a.innerHTML=`
    <div class="modal-content" role="dialog" aria-modal="true" aria-label="${e.name}">
      <div class="modal-topbar">
        <div class="modal-topbar-left">
          <span class="faction-tag">${e.faction}</span>
          ${e.featured?'<span class="badge-featured">★ Destacada</span>':""}
        </div>
        <button class="modal-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="modal-grid">
        <div class="modal-gallery">
          <img
            id="modal-main-img"
            class="modal-main-image"
            src="${e.imageUrl}"
            alt="${e.name}"
            onerror="this.src='${o}'"
          />
          ${n.length>1?`
            <div class="modal-thumbnails">
              ${n.map((t,r)=>`
                <img
                  class="modal-thumb ${r===0?"active":""}"
                  src="${t}"
                  alt="Vista ${r+1}"
                  data-src="${t}"
                  onerror="this.src='${o}'"
                />
              `).join("")}
            </div>
          `:""}
        </div>
        <div class="modal-info">
          <h2 class="modal-title">${e.name}</h2>
          <p class="modal-manufacturer">${e.manufacturer}</p>
          ${e.lore?`<blockquote class="modal-lore">"${e.lore}"</blockquote>`:""}
          <p class="modal-description">${e.description}</p>

          <div class="modal-stats">
            <div class="stat"><span class="stat-label">Dificultad</span><span class="stat-value">${e.difficulty}</span></div>
            ${e.hoursSpent?`<div class="stat"><span class="stat-label">Tiempo</span><span class="stat-value">${e.hoursSpent} horas</span></div>`:""}
            <div class="stat"><span class="stat-label">Completada</span><span class="stat-value">${new Date(e.completedAt).toLocaleDateString("es-ES",{year:"numeric",month:"long"})}</span></div>
          </div>

          <div class="modal-section">
            <h4>Técnicas usadas</h4>
            <div class="card-styles">
              ${e.paintingStyles.map(t=>`<span class="style-chip" data-tooltip="${L[t]??t}">${t}</span>`).join("")}
            </div>
            
          </div>

          ${e.paints&&e.paints.length>0?`
            <div class="modal-section">
              <h4>Pinturas empleadas</h4>
              <ul class="paints-list">
                ${e.paints.map(t=>`<li>${t}</li>`).join("")}
              </ul>
            </div>
          `:""}

          <div class="modal-section">
            <div class="tags-row">
              ${e.tags.map(t=>`<span class="tag">#${t}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(a),a.querySelector(".modal-close").addEventListener("click",()=>a.remove()),a.addEventListener("click",t=>{t.target===a&&a.remove()}),document.addEventListener("keydown",function t(r){r.key==="Escape"&&(a.remove(),document.removeEventListener("keydown",t))}),a.querySelectorAll(".modal-thumb").forEach(t=>{t.addEventListener("click",r=>{const m=r.currentTarget,W=document.getElementById("modal-main-img");W.src=m.dataset.src??"",a.querySelectorAll(".modal-thumb").forEach(M=>M.classList.remove("active")),m.classList.add("active")})}),requestAnimationFrame(()=>a.classList.add("open"))}let y={};const h=document.getElementById("gallery-grid"),c=document.getElementById("search-input"),i=document.getElementById("filter-faction"),l=document.getElementById("filter-style"),d=document.getElementById("filter-difficulty"),u=document.getElementById("filter-featured"),b=document.getElementById("result-count"),E=document.getElementById("stat-total"),$=document.getElementById("stat-featured");function I(){document.querySelectorAll("[data-author-name]").forEach(t=>t.textContent=g.authorName);const s=document.querySelector("[data-tagline]");s&&(s.textContent=g.tagline);const o=document.querySelector("[data-bio]");o&&(o.textContent=g.bio),B();const n=C({});E&&(E.textContent=String(n.length)),$&&($.textContent=String(j().length)),v(),c==null||c.addEventListener("input",z(p,250)),i==null||i.addEventListener("change",p),l==null||l.addEventListener("change",p),d==null||d.addEventListener("change",p),u==null||u.addEventListener("change",p);const a=document.getElementById("reset-filters");a==null||a.addEventListener("click",q),Object.entries(g.socialLinks).forEach(([t,r])=>{const m=document.getElementById(`social-${t}`);m&&r&&(m.href=r,m.style.display="inline-flex")})}function B(){S().forEach(o=>{const n=document.createElement("option");n.value=o,n.textContent=o,i==null||i.appendChild(n)}),w().forEach(o=>{const n=document.createElement("option");n.value=o,n.textContent=o,l==null||l.appendChild(n)})}function p(){y={searchQuery:(c==null?void 0:c.value.trim())||void 0,faction:(i==null?void 0:i.value)||void 0,style:(l==null?void 0:l.value)||void 0,difficulty:(d==null?void 0:d.value)||void 0,featured:u!=null&&u.checked?!0:void 0},v()}function q(){c&&(c.value=""),i&&(i.value=""),l&&(l.value=""),d&&(d.value=""),u&&(u.checked=!1),y={},v()}function v(){const e=C(y);if(b&&(b.textContent=`${e.length} miniatura${e.length!==1?"s":""}`),h.innerHTML="",e.length===0){h.innerHTML=`
      <div class="empty-state">
        <p class="empty-icon">🐉</p>
        <p>No se encontraron miniaturas con esos filtros.</p>
        <button onclick="document.getElementById('reset-filters')?.click()">Limpiar filtros</button>
      </div>
    `;return}const s=document.createDocumentFragment();e.forEach((o,n)=>{var t;const a=x(o);a.style.animationDelay=`${n*60}ms`,(t=a.querySelector(".btn-view"))==null||t.addEventListener("click",()=>{O(o)}),s.appendChild(a)}),h.appendChild(s)}function z(e,s){let o;return(...n)=>{clearTimeout(o),o=setTimeout(()=>e(...n),s)}}document.addEventListener("DOMContentLoaded",I);
