import { CommentModel } from './comment.model';

export interface RecommendationModel {
  title: string;
  type: string;
  genre: string;
  year: number;
  description: string;
  image: string;
  trailerUrl?: string;
  user: string;
  comments: CommentModel[];
}