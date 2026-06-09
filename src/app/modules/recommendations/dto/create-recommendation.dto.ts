export interface CreateRecommendationDto {
  title: string;
  genre: string;
  year: number;
  description: string;
  image: string;
  trailerUrl?: string;
}