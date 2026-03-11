// Types for the miniature painting portfolio

export type Faction =
  | 'Humanos'
  | 'Elfos'
  | 'Enanos'
  | 'Orcos'
  | 'No Muertos'
  | 'Demonios'
  | 'Dragones'
  | 'Otros'
  | 'Relictos'
  | 'Bestia'
  | 'Necrofago';

export type PaintingStyle =
  | 'NMM'         // Non-Metallic Metal
  | 'TMM'         // True Metallic Metal
  | 'OSL'         // Object Source Lighting
  | 'Zenithal'    // Pre-shading con luz cenital
  | 'Wet Blending'// Mezcla húmeda
  | 'Layering'    // Capas de pintura
  | 'Drybrushing' // Pincel seco
  | 'Speed Paint';// Pintura rápida sin detalles finos

export type DifficultyLevel = 'Principiante' | 'Intermedio' | 'Avanzado' | 'Experto';

export interface Miniature {
  id: string;
  name: string;
  manufacturer: string;
  faction: Faction;
  description: string;
  lore?: string;              // Historia o trasfondo del personaje
  imageUrl: string;           // Foto principal (fondo blanco)
  galleryImages?: string[];   // Fotos adicionales
  paintingStyles: PaintingStyle[];
  difficulty: DifficultyLevel;
  hoursSpent?: number;
  completedAt: string;        // ISO date string
  paints?: string[];          // Lista de pinturas usadas
  featured: boolean;
  tags: string[];
}

export interface GalleryFilter {
  faction?: Faction;
  style?: PaintingStyle;
  difficulty?: DifficultyLevel;
  featured?: boolean;
  searchQuery?: string;
}

export interface SiteConfig {
  authorName: string;
  tagline: string;
  bio: string;
  socialLinks: {
    instagram?: string;
    reddit?: string;
    twitter?: string;
    youtube?: string;
    facebook?: string;
    
  };
}
