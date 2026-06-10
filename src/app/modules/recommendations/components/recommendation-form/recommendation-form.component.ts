import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationService } from '../../services/recommendation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.css']
})
export class RecommendationFormComponent implements OnInit {

  type: string = '';

  title: string = '';
  genre: string = '';
  year: number = new Date().getFullYear();
  description: string = '';
  image: string = '';
  trailerUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationService: RecommendationService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') || '';
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.image = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  save(): void {
    if (!this.title.trim() || !this.genre || !this.year || !this.description.trim()) {
      alert('Completa los campos obligatorios');
      return;
    }

    const user = localStorage.getItem('currentUser') || 'Invitado';

    this.recommendationService.create(
      this.type,
      {
        title: this.title,
        genre: this.genre,
        year: this.year,
        description: this.description,
        image: this.image || 'https://picsum.photos/300/400?random=99',
        trailerUrl: this.trailerUrl
      },
      user
    );

    this.router.navigate(['/recommendations', this.type]);
  }

  goBack(): void {
    this.router.navigate(['/recommendations', this.type]);
  }
}