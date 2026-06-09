import { Injectable } from '@angular/core';
import { RecommendationStorageService } from '../repositories/recommendation-storage.service';
import { RecommendationModel } from '../models/recommendation.model';
import { CreateRecommendationDto } from '../dto/create-recommendation.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(
    private recommendationStorage: RecommendationStorageService
  ) {}

  getByType(type: string): RecommendationModel[] {
    return this.recommendationStorage.findByType(type);
  }

  getByTitle(title: string): RecommendationModel | undefined {
    return this.recommendationStorage.findByTitle(title);
  }

  create(type: string, dto: CreateRecommendationDto, user: string): void {
    const recommendation: RecommendationModel = {
      title: dto.title,
      type: type,
      genre: dto.genre,
      year: dto.year,
      description: dto.description,
      image: dto.image,
      trailerUrl: dto.trailerUrl,
      user: user,
      comments: []
    };

    this.recommendationStorage.save(recommendation);
  }

  addComment(title: string, dto: CreateCommentDto, user: string): void {
    const recommendations = this.recommendationStorage.findAll();

    const recommendation = recommendations.find(item => item.title === title);

    if (!recommendation) {
      return;
    }

    recommendation.comments.push({
      user: user,
      message: dto.message,
      createdAt: new Date().toLocaleString()
    });

    this.recommendationStorage.saveAll(recommendations);
  }
}