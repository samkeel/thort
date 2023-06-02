import {
  trigger,
  stagger,
  style,
  transition,
  animate,
  query,
} from '@angular/animations';

export const staggerListAnimation = trigger('staggerListAnimation', [
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
]);
