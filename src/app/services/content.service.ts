import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Observable<any> {
    const contentArray = [{
      id: 0,
      title: 'Website',
      description: 'An elegant website made with a sleek and modern approach',
      url: 'assets/img/web.png',
      vid: 'assets/vids/web.mp4'
    },
    {
      id: 1,
      title: 'Imitation (Short Film)',
      description: 'A short horror film about a family that has bad things happen to them. The family is actually part of an AI simulation to test human emotional intelligence. Dead humans from the simulation are replaced so the simulation can continue',
      url: 'assets/img/YMI_short-film.png',
      vid: 'assets/vids/YMI_short-film.mp4'
    },
    {
      id: 2,
      title: 'Ascent (Game)',
      description: 'This is an RPG game created by the students FOR the students. Jump in to enjoy yourself in this fun-packed game.',
      url: 'assets/img/Ascend.png',
      vid: 'assets/vids/Ascend.mp4'
    },
    {
      id: 3,
      title: 'Blogging website',
      description: 'A blogging website created for multiple purposes. Well-suited for personally blogs. It is very versatile and well designed.',
      url: 'assets/img/blog.png',
      vid: 'assets/vids/blog.mp4'
    },
    {
      id: 4,
      title: 'Idea (Short Film)',
      description: 'An idea-driven movie all about ideas. This thriller movie incorporates thriller and horror movies.',
      url: 'assets/img/short-film.png',
      vid: 'assets/vids/short-film.mp4'
    },
    ];

    return of(contentArray);
  }
}
