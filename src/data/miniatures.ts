import type { Miniature, SiteConfig } from '../types/index.js';

export const siteConfig: SiteConfig = {
  authorName: 'Pablo Muñoz',
  tagline: 'El pincel es el arma. La miniatura, el campo de batalla.',
  bio: 'Pintor de miniaturas de fantasía medieval apasionado por dar vida a pequeñas obras de arte. Cada miniatura cuenta una historia.',
  socialLinks: {
    instagram: '',
    reddit: '',
  }
};

// Datos de ejemplo — reemplaza imageUrl con tus fotos reales
export const miniatures: Miniature[] = [
  {
    id: 'monstruo-001',
    name: 'Leshen',
    manufacturer: 'Go on Board',
    faction: 'Relictos',
    description: 'Monstruo del bosque con cuerpo de árbol, cuernos y ramas.',
    lore: 'Los leshens habitan en bosques densos y primitivos. Criaturas ferozmente territoriales, cazan con sigilo y astucia siendo solitarios como únicos compañeros animales y seres debiles de mente.',
    imageUrl: '/images/Witcher/Leshen - Old World (1).jpg',
    galleryImages: [      
      '/images/Witcher/Leshen - Old World (3).jpg',      
      '/images/Witcher/Leshen - Old World (4).jpg',
      '/images/Witcher/Leshen - Old World (2).jpg',
    ],
    paintingStyles: ['Layering',"NMM", 'Drybrushing'],
    difficulty: "Intermedio",
    hoursSpent: 10,
    completedAt: '2024-09-15',
    paints: [

    ],
    featured: true,
    tags: ['leshen', 'monstruo', 'naturaleza', 'espiritu', 'witcher', 'old world'],
  },
  {
    id: 'monstruo-002',
    name: 'Ciclope',
    manufacturer: 'Go on Board',
    faction: 'Relictos',
    description: 'Gigante de un solo ojo, con piel gruesa y aspecto deforme.',
    lore: 'Los cíclopes pueden reconocerse fácilmente por el único ojo ubicado en el centro de sus frentes. Si por alguna razón esto no es visible, otras señales reveladoras son su enorme tamaño, su increíble fuerza y un odio hirviente hacia todos los humanos.',
    imageUrl: '/images/Witcher/Ciclope -Old World (3).jpg',
    galleryImages: [
      '/images/Witcher/Ciclope -Old World (4).jpg',
      '/images/Witcher/Ciclope -Old World (1).jpg',
      '/images/Witcher/Ciclope -Old World (2).jpg',
      
    ],
    paintingStyles: ['Layering', 'NMM', 'Wet Blending'],
    difficulty: 'Intermedio',
    hoursSpent: 10,
    completedAt: '2024-09-03',
    paints: [

    ],
    featured: true,
    tags: ['ciclope', 'relicto', 'gigante', 'witcher', 'old world', 'piel'],
  },
  {
    id: 'humanoide-001',
    name: '50th Anniversary Dwarf',
    manufacturer: 'D&D Nolzurs Marvelous',
    faction: 'Enanos',
    description: 'Una enana con armadura pesada, maza de guerra, cabello tomado.',
    lore: 'Valientes y resistentes, los enanos son conocidos por ser habilidosos guerreros, mineros y artesanos de la piedra y el metal. Aunque miden menos de 5 pies (1,5 m), los enanos son tan anchos y compactos que pueden pesar tanto como un humano con dos pies más de altura.',
    imageUrl: 
      '/images/Nolzurs/Enana - Workshop (3).jpg',
    galleryImages: [
      '/images/Nolzurs/Enana - Workshop (1).jpg',
      '/images/Nolzurs/Enana - Workshop (2).jpg',
      '/images/Nolzurs/Enana - Workshop (4).jpg',
    ],
    paintingStyles: ['OSL', 'Wet Blending', 'Zenithal'],
    difficulty: 'Principiante',
    hoursSpent: 8,
    completedAt: '2025-06-20',
    paints: [

    ],
    featured: false,
    tags: ['enano', 'guerrero', 'dnd', 'Nolzur', 'humanoide'],
  },
  {
    id: 'monstruo-003',
    name: 'Manticora',
    manufacturer: 'Go on Board',
    faction: 'Bestia',
    description: 'Una criatura con cuerpo de león, alas de murciélago y cola de escorpión.',
    lore: 'Las mantícoras son bestias feroces y peligrosas que habitan en regiones desérticas y montañosas. Son conocidas por su velocidad, agilidad y su capacidad para lanzar ataques venenosos con su cola de escorpión. Las mantícoras son cazadores solitarios que se alimentan de presas vivas, utilizando sus garras afiladas y su mordida poderosa para derribar a sus víctimas.',
    imageUrl: '/images/Witcher/Manticora - Old World (1).jpg',
    galleryImages: [
      '/images/Witcher/Manticora - Old World (2).jpg',
      '/images/Witcher/Manticora - Old World (3).jpg',
      '/images/Witcher/Manticora - Old World (4).jpg',
      '/images/Witcher/Manticora - Old World (5).jpg',
       '/images/Witcher/Manticora - Old World (6).jpg',
    ],
    paintingStyles: ['Layering', 'Wet Blending', 'NMM' ],
    difficulty: 'Intermedio',
    hoursSpent: 10,
    completedAt: '2025-01-10',
    paints: [

    ],
    featured: false,
    tags: ['bestia', 'monstruo', 'desierto', 'montaña', 'witcher', 'old world'],
  },
    {
    id: 'monstruo-004',
    name: 'Ghoul',
    manufacturer: 'Go on Board',
    faction: 'Bestia',
    description: 'Una criatura humanoide con piel pálida, garras afiladas',
    lore: 'Se dice que los ghouls fueron humanos que una vez fueron obligados al canibalismo y, después de muchos años pasados en criptas oscuras, experimentaron una transformación horrible. Sólo la carne humana puede satisfacer su hambre maligna eterna, por eso matan gente y almacenan los restos en los rincones de sus guaridas.',
    imageUrl: '/images/Witcher/Ghoul - Old World (1).jpg',
    galleryImages: [
      '/images/Witcher/Ghoul - Old World (2).jpg',
      '/images/Witcher/Ghoul - Old World (3).jpg',
    ],
    paintingStyles: ['Layering', 'NMM', 'Wet Blending', 'Speed Paint'],
    difficulty: 'Principiante',
    hoursSpent: 7,
    completedAt: '2025-02-10',
    paints: [

    ],
    featured: false,
    tags: ['bestia', 'monstruo', 'desierto', 'montaña', 'witcher', 'old world'],
  }

];

// Utility: Get all unique factions from data
export const getUniqueFactions = (): string[] =>
  [...new Set(miniatures.map(m => m.faction))];

// Utility: Get all unique painting styles from data
export const getUniquePaintingStyles = (): string[] =>
  [...new Set(miniatures.flatMap(m => m.paintingStyles))];

// Utility: Get featured miniatures
export const getFeaturedMiniatures = (): Miniature[] =>
  miniatures.filter(m => m.featured);
