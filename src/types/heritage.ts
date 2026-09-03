export type DestinationCategory = 'Nature' | 'Heritage' | 'Landmarks' | 'Coastal' | 'Culture';

export interface HeritageSite {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  municipality: string;
  category: DestinationCategory;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  highlights: string[];
  bestTime: string;
  travelTip: string;
  historicalPeriod: string;
  curatorNote?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
