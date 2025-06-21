
export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional: for an SVG icon
}