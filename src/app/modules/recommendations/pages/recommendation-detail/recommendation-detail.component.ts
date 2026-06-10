import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationModel } from '../../models/recommendation.model';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-recommendation-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendation-detail.component.html',
  styleUrls: ['./recommendation-detail.component.css']
})
export class RecommendationDetailComponent implements OnInit {

  recommendation?: RecommendationModel;
  type: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationService: RecommendationService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') || '';
    const title = this.route.snapshot.paramMap.get('title') || '';

    this.recommendation = this.recommendationService.getByTitle(title);
  }

  goBack(): void {
    this.router.navigate(['/recommendations', this.type]);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}