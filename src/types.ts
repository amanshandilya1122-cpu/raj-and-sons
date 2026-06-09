export interface Attraction {
  id: string;
  title: string;
  description: string;
  image: string;
  capacity: string;
  thrillLevel: 'Thrilling' | 'Family Friendly' | 'Kids Safe' | 'Relaxing';
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  priceEstimate: string;
  image: string;
  features: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Indian' | 'Chinese' | 'Continental' | 'Beverages' | 'Desserts';
  description: string;
  price: string;
}

export interface GalleryItem {
  id: string;
  category: 'waterpark' | 'raindance' | 'hotel' | 'restaurant' | 'events';
  title: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}
