// overview.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  imagenes = [
    {
      url: './assets/images/imagen1.JPG',
      nombre: 'JavaScript',
      descripcion:
        'Apasionado por el desarrollo web, especializado en JavaScript para crear experiencias interactivas. Con experiencia en construcción de interfaces dinámicas y funcionales.',
    },
    {
      url: './assets/images/imagen2.JPG',
      nombre: 'Node.js',
      descripcion:
        'Amante de Node.js, utilizo este entorno de ejecución para construir servidores rápidos y escalables. Expertise en el desarrollo de aplicaciones web eficientes y manejo de operaciones asíncronas para un rendimiento óptimo.',
    },
    {
      url: './assets/images/imagen3.jpg',
      nombre: 'HTML',
      descripcion:
        'Amante del desarrollo web, he utilizado HTML para estructurar contenido y crear interfaces accesibles y bien organizadas. Mi enfoque en HTML incluye el uso de las últimas especificaciones para garantizar la compatibilidad y la optimización SEO.',
    },
    {
      url: './assets/images/imagen4.JPG',
      nombre: 'CSS',
      descripcion:
        'Experto en dar vida a las interfaces con CSS. Desde la maquetación básica hasta la animación avanzada, mi experiencia en CSS incluye la creación de diseños atractivos y responsivos. Siempre busco la combinación perfecta de estilo y funcionalidad.',
    },
    {
      url: './assets/images/imagen5.jpg',
      nombre: 'PHP',
      descripcion:
        'Desarrollador PHP apasionado por la creación de aplicaciones dinámicas y sitios web interactivos. Mi experiencia incluye el manejo de datos, la creación de formularios y la integración con bases de datos. Me encanta aprovechar la versatilidad de PHP para construir soluciones web efectivas.',
    },
    {
      url: './assets/images/imagen6.JPG',
      nombre: 'SQL',
      descripcion:
        'Especializado en SQL, utilizo mi experiencia para diseñar y gestionar bases de datos eficientes. Mi enfoque se centra en consultas optimizadas, modelado de datos y asegurar la integridad de la información. Trabajo con diversas plataformas y herramientas para garantizar un rendimiento óptimo.',
    },
    {
      url: './assets/images/imagen7.JPG',
      nombre: 'ANGULAR',
      descripcion:
        'Amante de Angular, construyo aplicaciones web robustas y escalables utilizando este potente framework. Mi enfoque se centra en la arquitectura modular, componentes reutilizables y una interfaz de usuario atractiva. Estoy constantemente actualizado con las últimas características y mejores prácticas de Angular.',
    },
    {
      url: './assets/images/imagen8.jpg',
      nombre: 'GIT',
      descripcion:
        'Experto en Git, gestiono eficientemente el control de versiones para proyectos de desarrollo. Utilizo ramas, fusiones y resolución de conflictos para garantizar un flujo de trabajo colaborativo y sin problemas. La integridad y la colaboración son clave en mi enfoque con Git.',
    },
    {
      url: './assets/images/imagen9.jpg',
      nombre: 'Bootstrap',
      descripcion:
        'Profesional en el uso de Bootstrap para el desarrollo de interfaces responsivas y estilizadas. Implemento eficazmente componentes y cuadrículas de Bootstrap para crear aplicaciones web visualmente atractivas y completamente funcionales.',
    },
    {
      url: './assets/images/imagen10.JPG',
      nombre: 'TypeScript',
      descripcion:
        'Entusiasta de TypeScript para el desarrollo robusto y escalable en proyectos web. Utilizo TypeScript para agregar tipado estático a mis aplicaciones Angular, mejorando así la calidad del código y facilitando el mantenimiento a largo plazo.',
    },
    {
      url: './assets/images/imagen11.JPG',
      nombre: 'MySQL',
      descripcion:
        'Amante de MySQL para el manejo eficiente y seguro de bases de datos. Diseño y optimizo esquemas de bases de datos para garantizar un rendimiento óptimo y la integridad de los datos en mis aplicaciones web.',
    },
  ];

  actual = 0;
  puntos: number[] = [];

  ngOnInit(): void {
    this.puntos = Array(this.imagenes.length)
      .fill(0)
      .map((x, i) => i);
    this.posicionCarrusel();
  }

  atras(): void {
    this.actual -= 1;

    if (this.actual === -1) {
      this.actual = this.imagenes.length - 1;
    }

    this.posicionCarrusel();
  }

  adelante(): void {
    this.actual += 1;

    if (this.actual === this.imagenes.length) {
      this.actual = 0;
    }

    this.posicionCarrusel();
  }

  irAImagen(punto: number): void {
    this.actual = punto;
    this.posicionCarrusel();
  }

  posicionCarrusel(): void {
    // Puedes agregar lógica adicional aquí si es necesario
  }
}
