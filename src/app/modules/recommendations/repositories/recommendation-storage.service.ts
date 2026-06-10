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
    image: 'assets/images/interestelar.jpg',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Matrix',
    type: 'pelicula',
    genre: 'Acción',
    year: 1999,
    description: 'Película sobre una persona que descubre que vive dentro de un mundo virtual.',
    image: 'assets/images/Matrix.jpg',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Posdata: Te amo',
    type: 'pelicula',
    genre: 'Romance',
    year: 2007,
    description: 'Película sobre una mujer que pierde a su esposo y recibe cartas que la ayudan a superar su duelo.',
    image: 'assets/images/Pd Te amo.jpg',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },

  {
    title: 'El joven Sheldon',
    type: 'serie',
    genre: 'Comedia',
    year: 2017,
    description: 'Serie sobre la infancia del icónico personaje Sheldon Cooper antes de los eventos de The Big Bang Theory.',
    image: 'https://picsum.photos/300/400?random=4',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'The Umbrella Academy',
    type: 'serie',
    genre: 'Acción',
    year: 2019,
    description: 'Serie sobre una familia disfuncional de superhéroes que intenta resolver misterios y evitar desastres.',
    image: 'https://picsum.photos/300/400?random=5',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Dark',
    type: 'serie',
    genre: 'Ciencia ficción',
    year: 2017,
    description: 'Serie de misterio, viajes en el tiempo y secretos familiares en un pequeño pueblo alemán.',
    image: 'https://picsum.photos/300/400?random=6',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },

  {
    title: 'Death Note',
    type: 'anime',
    genre: 'Suspenso',
    year: 2006,
    description: 'Anime sobre una libreta capaz de causar la muerte de cualquier persona cuyo nombre sea escrito en ella.',
    image: 'https://picsum.photos/300/400?random=7',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Pokémon',
    type: 'anime',
    genre: 'Aventura',
    year: 1997,
    description: 'Anime sobre entrenadores que viajan por distintas regiones capturando criaturas llamadas Pokémon.',
    image: 'https://picsum.photos/300/400?random=8',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Mushoku Tensei',
    type: 'anime',
    genre: 'Isekai',
    year: 2021,
    description: 'Anime de fantasía sobre una persona que renace en otro mundo y comienza una nueva vida.',
    image: 'https://picsum.photos/300/400?random=9',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },

  {
    title: '1984',
    type: 'libro',
    genre: 'Distopía',
    year: 1949,
    description: 'Novela sobre una sociedad vigilada y controlada por un régimen autoritario.',
    image: 'https://picsum.photos/300/400?random=10',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'El Hobbit',
    type: 'libro',
    genre: 'Fantasía',
    year: 1937,
    description: 'Novela de fantasía sobre el viaje de Bilbo Bolsón hacia una gran aventura.',
    image: 'https://picsum.photos/300/400?random=11',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Dune',
    type: 'libro',
    genre: 'Ciencia ficción',
    year: 1965,
    description: 'Novela de ciencia ficción ambientada en un planeta desértico clave para el destino del universo.',
    image: 'https://picsum.photos/300/400?random=12',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },

  {
    title: 'The Legend of Zelda',
    type: 'juego',
    genre: 'Aventura',
    year: 1986,
    description: 'Videojuego clásico de aventura y exploración protagonizado por Link.',
    image: 'https://picsum.photos/300/400?random=13',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'Minecraft',
    type: 'juego',
    genre: 'Sandbox',
    year: 2011,
    description: 'Videojuego de construcción, exploración y supervivencia en mundos generados por bloques.',
    image: 'https://picsum.photos/300/400?random=14',
    trailerUrl: '',
    user: 'Sistema',
    comments: []
  },
  {
    title: 'God of War',
    type: 'juego',
    genre: 'Acción',
    year: 2018,
    description: 'Videojuego de acción y aventura centrado en Kratos y su relación con su hijo Atreus.',
    image: 'https://picsum.photos/300/400?random=15',
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