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
      description: 'Película de ciencia ficción que combina viajes espaciales, relatividad, amor familiar y la búsqueda de un nuevo hogar para la humanidad.',
      image: 'assets/imagenes/interestelar.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=5mAbnQQiPD8',
      user: 'Sistema',
      comments: [
        { user: 'Ana', message: 'La historia es profunda y visualmente impresionante.', createdAt: '10/06/2026, 10:00' },
        { user: 'Carlos', message: 'Me gustó mucho cómo explican el tiempo y el espacio.', createdAt: '10/06/2026, 10:05' },
        { user: 'Sistema', message: 'Recomendada para quienes disfrutan la ciencia ficción reflexiva.', createdAt: '10/06/2026, 10:10' }
      ]
    },
    {
      title: 'Matrix',
      type: 'pelicula',
      genre: 'Acción',
      year: 1999,
      description: 'Película de acción y ciencia ficción donde un programador descubre que la realidad en la que vive es una simulación controlada por máquinas.',
      image: 'assets/imagenes/Matrix.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=m8e-FF8MsqU',
      user: 'Sistema',
      comments: [
        { user: 'Luis', message: 'Una película clásica con mucha acción y filosofía.', createdAt: '10/06/2026, 10:15' },
        { user: 'Mónica', message: 'La idea de la simulación sigue siendo muy interesante.', createdAt: '10/06/2026, 10:20' },
        { user: 'Sistema', message: 'Ideal para fans de la acción futurista.', createdAt: '10/06/2026, 10:25' }
      ]
    },
    {
      title: 'Posdata: Te amo',
      type: 'pelicula',
      genre: 'Romance',
      year: 2007,
      description: 'Drama romántico sobre una mujer que, tras perder a su esposo, recibe una serie de cartas que la ayudan a sanar y continuar con su vida.',
      image: 'assets/imagenes/Pd Te amo.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=eanituhCopY',
      user: 'Sistema',
      comments: [
        { user: 'Fernanda', message: 'Es una película muy emotiva.', createdAt: '10/06/2026, 10:30' },
        { user: 'Jorge', message: 'Tiene un mensaje bonito sobre superar una pérdida.', createdAt: '10/06/2026, 10:35' },
        { user: 'Sistema', message: 'Recomendada para quienes buscan una historia romántica y sentimental.', createdAt: '10/06/2026, 10:40' }
      ]
    },

    {
      title: 'El joven Sheldon',
      type: 'serie',
      genre: 'Comedia',
      year: 2017,
      description: 'Serie de comedia que muestra la infancia de Sheldon Cooper, un niño genio que intenta adaptarse a su familia, escuela y entorno social.',
      image: 'assets/imagenes/JovenSheldon.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=Ijc8x73tfVc',
      user: 'Sistema',
      comments: [
        { user: 'Sofía', message: 'Es divertida y ligera para ver en familia.', createdAt: '10/06/2026, 10:45' },
        { user: 'Raúl', message: 'Me gusta cómo muestran la personalidad de Sheldon desde niño.', createdAt: '10/06/2026, 10:50' },
        { user: 'Sistema', message: 'Buena opción para quienes disfrutan comedias familiares.', createdAt: '10/06/2026, 10:55' }
      ]
    },
    {
      title: 'The Umbrella Academy',
      type: 'serie',
      genre: 'Acción',
      year: 2019,
      description: 'Serie de acción y fantasía sobre hermanos con habilidades especiales que se reúnen para resolver misterios familiares y enfrentar amenazas apocalípticas.',
      image: 'assets/imagenes/theUmbrelaAcademy.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=KHucKOK-Vik',
      user: 'Sistema',
      comments: [
        { user: 'Diego', message: 'Tiene personajes muy distintos y entretenidos.', createdAt: '10/06/2026, 11:00' },
        { user: 'Valeria', message: 'La mezcla de acción, humor y drama funciona muy bien.', createdAt: '10/06/2026, 11:05' },
        { user: 'Sistema', message: 'Recomendada para quienes buscan superhéroes con un tono diferente.', createdAt: '10/06/2026, 11:10' }
      ]
    },
    {
      title: 'Dark',
      type: 'serie',
      genre: 'Ciencia ficción',
      year: 2017,
      description: 'Serie alemana de misterio y ciencia ficción que explora viajes en el tiempo, secretos familiares y las consecuencias de alterar el pasado.',
      image: 'assets/imagenes/Dark.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=14FGjkrrXFk',
      user: 'Sistema',
      comments: [
        { user: 'Iván', message: 'La trama es compleja, pero muy bien construida.', createdAt: '10/06/2026, 11:15' },
        { user: 'Paola', message: 'Necesita mucha atención, pero vale la pena.', createdAt: '10/06/2026, 11:20' },
        { user: 'Sistema', message: 'Ideal para quienes disfrutan historias de misterio y viajes temporales.', createdAt: '10/06/2026, 11:25' }
      ]
    },

    {
      title: 'Death Note',
      type: 'anime',
      genre: 'Suspenso',
      year: 2006,
      description: 'Anime de suspenso psicológico sobre un estudiante que encuentra una libreta capaz de matar a cualquier persona cuyo nombre sea escrito en ella.',
      image: 'assets/imagenes/Dn.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=WS6bOufNi9E',
      user: 'Sistema',
      comments: [
        { user: 'Kevin', message: 'El duelo mental entre los personajes es excelente.', createdAt: '10/06/2026, 11:30' },
        { user: 'Mariana', message: 'Tiene mucho suspenso desde el primer capítulo.', createdAt: '10/06/2026, 11:35' },
        { user: 'Sistema', message: 'Recomendado para quienes buscan anime con estrategia y tensión.', createdAt: '10/06/2026, 11:40' }
      ]
    },
    {
      title: 'Pokémon',
      type: 'anime',
      genre: 'Aventura',
      year: 1997,
      description: 'Anime de aventura donde jóvenes entrenadores viajan por diferentes regiones capturando Pokémon, participando en batallas y formando amistades.',
      image: 'assets/imagenes/Pokemon.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=ZYMkmW0TTSg&list=RDZYMkmW0TTSg&start_radio=1',
      user: 'Sistema',
      comments: [
        { user: 'Andrea', message: 'Es nostálgico y muy entretenido.', createdAt: '10/06/2026, 11:45' },
        { user: 'Miguel', message: 'Me gusta por sus aventuras y personajes clásicos.', createdAt: '10/06/2026, 11:50' },
        { user: 'Sistema', message: 'Buena opción para quienes buscan una aventura familiar.', createdAt: '10/06/2026, 11:55' }
      ]
    },
    {
      title: 'Mushoku Tensei',
      type: 'anime',
      genre: 'Fantasía',
      year: 2021,
      description: 'Anime de fantasía e isekai sobre una persona que renace en otro mundo y decide aprovechar su nueva vida para crecer, aprender magia y enfrentar sus errores.',
      image: 'assets/imagenes/MT.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=jSCKo90DMK4',
      user: 'Sistema',
      comments: [
        { user: 'Hugo', message: 'El mundo de fantasía está muy bien desarrollado.', createdAt: '10/06/2026, 12:00' },
        { user: 'Daniela', message: 'Tiene buena animación y una historia de crecimiento personal.', createdAt: '10/06/2026, 12:05' },
        { user: 'Sistema', message: 'Recomendado para fans del género isekai.', createdAt: '10/06/2026, 12:10' }
      ]
    },

    {
      title: '1984',
      type: 'libro',
      genre: 'Distopía',
      year: 1949,
      description: 'Novela distópica sobre una sociedad vigilada por un régimen autoritario que controla la información, el pensamiento y la vida privada de las personas.',
      image: 'assets/imagenes/1984.jpg',
      trailerUrl: '',
      user: 'Sistema',
      comments: [
        { user: 'Claudia', message: 'Es un libro fuerte y muy reflexivo.', createdAt: '10/06/2026, 12:15' },
        { user: 'Oscar', message: 'Hace pensar mucho sobre la vigilancia y el control social.', createdAt: '10/06/2026, 12:20' },
        { user: 'Sistema', message: 'Recomendado para quienes disfrutan novelas distópicas.', createdAt: '10/06/2026, 12:25' }
      ]
    },
    {
      title: 'El Hobbit',
      type: 'libro',
      genre: 'Fantasía',
      year: 1937,
      description: 'Novela de fantasía que narra el viaje de Bilbo Bolsón junto a un grupo de enanos en busca de un tesoro custodiado por un dragón.',
      image: 'assets/imagenes/hobbit.jpg',
      trailerUrl: '',
      user: 'Sistema',
      comments: [
        { user: 'Ricardo', message: 'Una aventura clásica y muy entretenida.', createdAt: '10/06/2026, 12:30' },
        { user: 'Elena', message: 'Me gusta porque introduce muy bien el mundo de fantasía.', createdAt: '10/06/2026, 12:35' },
        { user: 'Sistema', message: 'Ideal para comenzar a leer fantasía épica.', createdAt: '10/06/2026, 12:40' }
      ]
    },
    {
      title: 'Dune',
      type: 'libro',
      genre: 'Ciencia ficción',
      year: 1965,
      description: 'Novela de ciencia ficción ambientada en Arrakis, un planeta desértico donde la política, la religión y el control de un recurso valioso definen el destino del imperio.',
      image: 'assets/imagenes/dune.jpg',
      trailerUrl: '',
      user: 'Sistema',
      comments: [
        { user: 'Alberto', message: 'Tiene una construcción de mundo muy completa.', createdAt: '10/06/2026, 12:45' },
        { user: 'Natalia', message: 'Es denso al inicio, pero la historia es muy buena.', createdAt: '10/06/2026, 12:50' },
        { user: 'Sistema', message: 'Recomendado para lectores de ciencia ficción política y épica.', createdAt: '10/06/2026, 12:55' }
      ]
    },

    {
      title: 'The Legend of Zelda',
      type: 'juego',
      genre: 'Aventura',
      year: 1986,
      description: 'Videojuego de aventura y exploración protagonizado por Link, quien debe recorrer un mundo lleno de secretos, enemigos y desafíos para salvar el reino.',
      image: 'assets/imagenes/zelda.jpg',
      trailerUrl: '',
      user: 'Sistema',
      comments: [
        { user: 'Mario', message: 'Un clásico de aventura que marcó generaciones.', createdAt: '10/06/2026, 13:00' },
        { user: 'Laura', message: 'Me gusta por la exploración y los acertijos.', createdAt: '10/06/2026, 13:05' },
        { user: 'Sistema', message: 'Recomendado para quienes disfrutan mundos de fantasía y exploración.', createdAt: '10/06/2026, 13:10' }
      ]
    },
    {
      title: 'Minecraft',
      type: 'juego',
      genre: 'Sandbox',
      year: 2011,
      description: 'Videojuego sandbox de construcción, exploración y supervivencia donde el jugador puede crear mundos, recolectar recursos y diseñar sus propias aventuras.',
      image: 'assets/imagenes/minecraft.jpg',
      trailerUrl: '',
      user: 'Sistema',
      comments: [
        { user: 'Samuel', message: 'Es muy creativo y nunca se siente igual.', createdAt: '10/06/2026, 13:15' },
        { user: 'Renata', message: 'Me gusta porque puedes construir casi cualquier cosa.', createdAt: '10/06/2026, 13:20' },
        { user: 'Sistema', message: 'Ideal para quienes disfrutan crear y explorar libremente.', createdAt: '10/06/2026, 13:25' }
      ]
    },
    {
      title: 'God of War',
      type: 'juego',
      genre: 'Acción',
      year: 2018,
      description: 'Videojuego de acción y aventura que sigue a Kratos y su hijo Atreus en un viaje por tierras nórdicas lleno de combates, mitología y desarrollo emocional.',
      image: 'assets/imagenes/gofw.jpg',
      trailerUrl: '',
      user: 'Sistema',
      comments: [
        { user: 'Emilio', message: 'La historia entre padre e hijo está muy bien lograda.', createdAt: '10/06/2026, 13:30' },
        { user: 'Patricia', message: 'Tiene combates intensos y escenarios impresionantes.', createdAt: '10/06/2026, 13:35' },
        { user: 'Sistema', message: 'Recomendado para quienes buscan acción con una buena narrativa.', createdAt: '10/06/2026, 13:40' }
      ]
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