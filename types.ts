
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  videoThumbnail?: string; // Optional field for motion grid previews
  videoUrl: string;
  description: string[];
  client: string;
  role: string;
  artDirection: string;
  music?: string;
  bgColor: string;
}
