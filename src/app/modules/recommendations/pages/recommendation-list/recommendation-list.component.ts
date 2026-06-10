import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RecommendationModel } from '../../models/recommendation.model';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-recommendation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.css']
})
export class RecommendationListComponent implements OnInit {

  type: string = '';
  title: string = '';

  recommendations: RecommendationModel[] = [];
  filteredRecommendations: RecommendationModel[] = [];

  selectedGenre: string = '';
  selectedYear: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationService: RecommendationService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') || '';
    this.title = this.getTitle(this.type);
    this.loadRecommendations();
  }

  loadRecommendations(): void {
    this.recommendations = this.recommendationService.getByType(this.type);
    this.filteredRecommendations = [...this.recommendations];
  }

  applyFilters(): void {
    this.filteredRecommendations = this.recommendations.filter(item => {
      const matchGenre = this.selectedGenre
        ? item.genre === this.selectedGenre
        : true;

      const matchYear = this.selectedYear
        ? Number(item.year) === Number(this.selectedYear)
        : true;

      return matchGenre && matchYear;
    });
  }

  clearFilters(): void {
    this.selectedGenre = '';
    this.selectedYear = null;
    this.filteredRecommendations = [...this.recommendations];
  }

  getTitle(type: string): string {
    switch (type) {
      case 'serie':
        return 'Series';
      case 'pelicula':
        return 'Películas';
      case 'anime':
        return 'Anime';
      case 'libro':
        return 'Libros';
      case 'juego':
        return 'Juegos';
      default:
        return 'Recomendaciones';
    }
  }

  goToAdd(): void {
    this.router.navigate(['/recommendations', this.type, 'add']);
  }

  goToDetail(recommendation: RecommendationModel): void {
    this.router.navigate(['/recommendations', this.type, recommendation.title]);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}