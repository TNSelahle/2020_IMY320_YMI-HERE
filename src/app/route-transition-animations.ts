import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
  transition('Hub => View, View => Hub', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-50%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('2s ease-out', style({ right: '100%', opacity: 0 }))]),
      query(':enter', [animate('2s ease-out', style({ left: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
  transition('Landing => *, * => Landing', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ top: '-50%', opacity: 0 })]),
    query(':leave', animateChild()),
    query(':leave', [animate('1s ease-out', style({ bottom: '100%', opacity: 0 }))]),
    query(':enter', [animate('1s ease-out', style({ top: '0%', opacity: 1 }))]),
    query(':enter', animateChild())
  ])
]);

