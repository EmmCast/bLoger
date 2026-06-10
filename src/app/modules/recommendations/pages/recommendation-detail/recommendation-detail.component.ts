import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationModel } from '../../models/recommendation.model';
import { RecommendationService } from '../../services/recommendation.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentBoxComponent } from '../../components/comment-box/comment-box.component';
@Component({
  selector: 'app-recommendation-detail',
  standalone: true,
  imports: [CommonModule, CommentBoxComponent],
  templateUrl: './recommendation-detail.component.html',
  styleUrls: ['./recommendation-detail.component.css']
})
export class RecommendationDetailComponent implements OnInit {

  recommendation?: RecommendationModel;
  type: string = '';

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationService: RecommendationService,
    private sanitizer: DomSanitizer
  ) {}

  getYoutubeEmbedUrl(url: string | undefined): SafeResourceUrl | null {
    if (!url) {
      return null;
    }

    const videoId = this.extractYoutubeId(url);

    if (!videoId) {
      return null;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractYoutubeId(url: string): string | null {
    if (url.includes('watch?v=')) {
      return url.split('watch?v=')[1].split('&')[0];
    }

    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split('?')[0];
    }

    return null;
  }

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