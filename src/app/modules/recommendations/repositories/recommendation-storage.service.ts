import { Injectable } from '@angular/core';
import { RecommendationModel } from '../models/recommendation.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationStorageService {

  private readonly STORAGE_KEY = 'recommendations';

  private readonly initialRecommendations: RecommendationModel[] = [
    {
      title: 'Interestelar',
      type: 'pelicula',
      genre: 'Ciencia ficción',
      year: 2014,
      description: 'Película sobre viajes espaciales, el tiempo y la exploración del universo.',
      image: 'https://picsum.photos/300/400?random=1',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'Matrix',
      type: 'pelicula',
      genre: 'Accion',
      year: 199,
      description: 'Película sobre una persona se da cuenta que esta en un mundo virtual.',
      image: 'https://picsum.photos/300/400?random=1',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'Posdata Te Amo',
      type: 'pelicula',
      genre: 'Romance',
      year: 2014,
      description: 'Película sobre una mujer que pierde a su esposo y recibe cartas de el para superar su muerte.',
      image: 'https://picsum.photos/300/400?random=1',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    

    {
      title: 'El Joven Sheldon',
      type: 'serie',
      genre: 'Comedia',
      year: 2017,
      description: 'Serie sobre el iconico personaje de la teoria del big bang cuando aun era joven .',
      image: 'https://picsum.photos/300/400?random=2',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'The Umbrela Academy',
      type: 'serie',
      genre: 'Accion',
      year: 2017,
      description: 'Serie de misterio y viajes en el tiempo.',
      image: 'https://picsum.photos/300/400?random=2',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'Dark',
      type: 'serie',
      genre: 'Ciencia ficción',
      year: 2017,
      description: 'Serie de misterio y viajes en el tiempo.',
      image: 'https://picsum.photos/300/400?random=2',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },

    {
      title: 'Death Note',
      type: 'anime',
      genre: 'Suspenso',
      year: 2006,
      description: 'Anime sobre una libreta capaz de causar la muerte de una persona.',
      image: 'https://picsum.photos/300/400?random=3',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'pokemon',
      type: 'anime',
      genre: 'Aventura',
      year: 2006,
      description: 'Anime sobre una libreta capaz de causar la muerte de una persona.',
      image: 'https://picsum.photos/300/400?random=3',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'Mushuko tensey',
      type: 'anime',
      genre: 'Isekay',
      year: 2006,
      description: 'Anime sobre una libreta capaz de causar la muerte de una persona.',
      image: 'https://picsum.photos/300/400?random=3',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },

    {
      title: '1984',
      type: 'libro',
      genre: 'Distopía',
      year: 1949,
      description: 'Novela sobre una sociedad vigilada y controlada.',
      image: 'https://picsum.photos/300/400?random=4',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: '1984',
      type: 'libro',
      genre: 'Distopía',
      year: 1949,
      description: 'Novela sobre una sociedad vigilada y controlada.',
      image: 'https://picsum.photos/300/400?random=4',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: '1984',
      type: 'libro',
      genre: 'Distopía',
      year: 1949,
      description: 'Novela sobre una sociedad vigilada y controlada.',
      image: 'https://picsum.photos/300/400?random=4',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },

    {
      title: 'The Legend of Zelda',
      type: 'juego',
      genre: 'Aventura',
      year: 1986,
      description: 'Videojuego clásico de aventura y exploración.',
      image: 'https://picsum.photos/300/400?random=5',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
    {
      title: 'The Legend of Zelda',
      type: 'juego',
      genre: 'Aventura',
      year: 1986,
      description: 'Videojuego clásico de aventura y exploración.',
      image: 'https://picsum.photos/300/400?random=5',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    },
        {
      title: 'The Legend of Zelda',
      type: 'juego',
      genre: 'Aventura',
      year: 1986,
      description: 'Videojuego clásico de aventura y exploración.',
      image: 'https://picsum.photos/300/400?random=5',
      trailerUrl: '',
      user: 'Sistema',
      comments: []
    }


  ];

  constructor() {
    this.initializeStorage();
  }

  private initializeStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);

    if (!data) {
      this.saveAll(this.initialRecommendations);
    }
  }

  findAll(): RecommendationModel[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  saveAll(recommendations: RecommendationModel[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(recommendations));
  }

  save(recommendation: RecommendationModel): void {
    const recommendations = this.findAll();
    recommendations.push(recommendation);
    this.saveAll(recommendations);
  }

  findByType(type: string): RecommendationModel[] {
    return this.findAll().filter(item => item.type === type);
  }

  findByTitle(title: string): RecommendationModel | undefined {
    return this.findAll().find(item => item.title === title);
  }
}