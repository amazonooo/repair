import { FC } from 'react'

export interface ITechnologies {
  id: number
  image: string
  title: string
}

export const technologies: ITechnologies[] = [
  {
    id: 1,
    image: '/tech-1.jpg',
    title: 'Офисов'
  },
  {
    id: 2,
    image: '/tech-2.jpg',
    title: 'Предприятий'
  },
  {
    id: 3,
    image: '/tech-3.jpg',
    title: 'Квартир'
  },
  {
    id: 4,
    image: '/tech-4.jpg',
    title: 'Торговых центров'
  },
  {
    id: 5,
    image: '/tech-5.jpg',
    title: 'Гаражей'
  },
  {
    id: 6,
    image: '/tech-6.jpg',
    title: 'Коттеджей'
  }
]