// src/data/festivalData.ts
export interface CardServicio {
  id: number;
  titulo: string;
  descripcion: string;
  textoBoton: string;
}

export const SERVICIOS_FESTIVAL: CardServicio[] = [
  {
    id: 1,
    titulo: 'Creatividad',
    descripcion: 'Espacios y talleres para explorar ideas, técnicas y procesos creativos durante el evento.',
    textoBoton: 'Ver actividades'
  },
  {
    id: 2,
    titulo: 'musica',
    descripcion: 'Conciertos y experiencias sonoras para descubrir nuevos sonidos y momentos musicales.',
    textoBoton: 'Ver programación'
  },
  {
    id: 3,
    titulo: 'pensamiento',
    descripcion: 'Charlas y encuentros para reflexionar, dialogar y expandir la manera de ver el mundo.',
    textoBoton: 'Conocer ponentes'
  }
];

