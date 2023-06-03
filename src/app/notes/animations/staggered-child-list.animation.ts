import {
  trigger,
  stagger,
  style,
  transition,
  animate,
  query,
  animateChild,
} from '@angular/animations';

export const Container = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
];

export const StaggerEnterExitAnimation = [
  trigger('staggerEnterExitAnimation', [
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),
      query(
        ':enter',
        stagger('300ms', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)',
          }),
          animate(
            '500ms ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0)',
            })
          ),
        ]),
        { optional: true }
      ),
      query(
        ':leave',
        stagger('300ms', [
          animate(
            '500ms ease-in',
            style({
              opacity: 0,
              transform: 'translateX(60%)',
            })
          ),
        ]),
        { optional: true }
      ),
    ]),
  ]),
];
