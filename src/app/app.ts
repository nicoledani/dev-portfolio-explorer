import { Component } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  emoji: string;
  theme: string;
  status: string;
  featured?: boolean;
  repository: string;
  demo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly skills = [
    { name: 'Angular', icon: '✦' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'HTML & CSS', icon: '✿' },
    { name: 'Git & GitHub', icon: '⌘' },
  ];

  protected readonly projects: Project[] = [
    {
      id: 1,
      name: 'Mi portafolio',
      description: 'El espacio donde comparto mi recorrido, mis aprendizajes y los proyectos que voy creando.',
      technologies: ['Angular', 'SCSS', 'GitHub Pages'],
      emoji: '♡',
      theme: 'visual-lilac',
      status: 'En desarrollo',
      featured: true,
      repository: '',
      demo: '',
    },
    {
      id: 2,
      name: 'Proyecto dos',
      description: 'Una nueva idea tomando forma. Aquí podrás conocer todos sus detalles muy pronto.',
      technologies: ['Angular', 'TypeScript'],
      emoji: '✦',
      theme: 'visual-peach',
      status: 'Próximamente',
      repository: '',
      demo: '',
    },
    {
      id: 3,
      name: 'Proyecto tres',
      description: 'Diseñado para aprender, explorar y convertir retos en experiencias digitales.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      emoji: '☼',
      theme: 'visual-yellow',
      status: 'Próximamente',
      repository: '',
      demo: '',
    },
    {
      id: 4,
      name: 'Proyecto cuatro',
      description: 'Un proyecto más para seguir creciendo y compartir en este pequeño universo digital.',
      technologies: ['TypeScript', 'Angular'],
      emoji: '☁',
      theme: 'visual-blue',
      status: 'Próximamente',
      repository: '',
      demo: '',
    },
    {
      id: 5,
      name: 'Proyecto cinco',
      description: 'El próximo capítulo de mi camino como desarrolladora está por escribirse.',
      technologies: ['Por definir'],
      emoji: '✿',
      theme: 'visual-pink',
      status: 'Próximamente',
      repository: '',
      demo: '',
    },
  ];
}
