# ⚔ WebMonsterPainting — Portfolio de Pintado de Miniaturas

Portfolio web en TypeScript para mostrar tus miniaturas de fantasía medieval con fondo blanco.

## Estructura del Proyecto

```
webmonsterpainting/
├── index.html                  # HTML principal
├── src/
│   ├── main.ts                 # Punto de entrada, lógica principal
│   ├── style.css               # Estilos (tema oscuro medieval / dorado)
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript (Miniature, GalleryFilter, etc.)
│   ├── data/
│   │   └── miniatures.ts       # ← AQUÍ añades tus miniaturas
│   └── components/
│       └── gallery.ts          # Filtrado, renderizado de cards y modal
├── public/
│   └── images/                 # ← AQUÍ van tus fotos
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Inicio Rápido

```bash
npm install
npm run dev
```

Luego abre http://localhost:5173

## Añadir tus Miniaturas

Edita `src/data/miniatures.ts`:

```typescript
{
  id: 'mi-miniatura-001',           // ID único
  name: 'Nombre del personaje',
  manufacturer: 'Games Workshop',
  faction: 'Humanos',               // Ver tipo Faction en types/index.ts
  description: 'Descripción breve...',
  lore: 'Historia del personaje...',  // Opcional
  imageUrl: '/images/mi-foto.jpg',   // Foto principal (fondo blanco)
  galleryImages: [                   // Fotos adicionales (opcional)
    '/images/mi-foto-detalle.jpg',
  ],
  paintingStyles: ['TMM', 'OSL'],    // Ver tipo PaintingStyle
  difficulty: 'Avanzado',            // Principiante | Intermedio | Avanzado | Experto
  hoursSpent: 15,                    // Opcional
  completedAt: '2025-03-01',         // Fecha ISO
  paints: ['Retributor Armour', ...], // Pinturas usadas (opcional)
  featured: true,                    // ¿Aparece en destacadas?
  tags: ['paladín', 'dorado'],
}
```

## Configurar el Sitio

Edita `src/data/miniatures.ts` — sección `siteConfig`:

```typescript
export const siteConfig: SiteConfig = {
  authorName: 'WebMonsterPainting',
  tagline: 'Tu frase épica aquí',
  bio: 'Tu descripción como pintor...',
  socialLinks: {
    instagram: 'https://instagram.com/tu_usuario',
    reddit: 'https://reddit.com/u/tu_usuario',
  }
};
```

## Fotos Recomendadas

- **Fondo blanco** puro para las imágenes de galería
- Resolución mínima: 800×800px
- Formato: JPG o PNG
- Guárdalas en `public/images/`

## Técnicas de Pintado Disponibles

`NMM` · `TMM` · `OSL` · `Zenithal` · `Wet Blending` · `Layering` · `Drybrushing` · `Speed Paint`

## Facciones Disponibles

`Humanos` · `Elfos` · `Enanos` · `Orcos` · `No Muertos` · `Demonios` · `Dragones` · `Otros`

> Para añadir nuevas facciones o técnicas, edita los tipos en `src/types/index.ts`

## Build para Producción

```bash
npm run build
```

Los archivos compilados quedan en `dist/` listos para subir a cualquier hosting estático (Netlify, GitHub Pages, Vercel...).
