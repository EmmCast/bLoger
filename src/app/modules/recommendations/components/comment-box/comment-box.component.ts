import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentModel } from '../../models/comment.model';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {

  @Input() title: string = '';
  @Input() comments: CommentModel[] = [];

  message: string = '';

  constructor(private recommendationService: RecommendationService) {}

  addComment(): void {
    if (!this.message.trim()) {
      alert('Escribe un comentario');
      return;
    }

    const user = localStorage.getItem('currentUser') || 'Invitado';

    this.recommendationService.addComment(
      this.title,
      { message: this.message },
      user
    );

    this.comments.push({
      user,
      message: this.message,
      createdAt: new Date().toLocaleString()
    });

    this.message = '';
  }
}