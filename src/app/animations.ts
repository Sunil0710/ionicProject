import { trigger, transition, style, state, animate, keyframes } from '@angular/animations'

export let bounce = trigger('bounce',[

    // state('void', style({ opacity: 0 })),
    state('void', style({ transform: 'translateY(0)' })),

    transition(':enter', [ // void <=> * or void => *, * => void
      animate(500, keyframes([
        style({ transform: 'translateY(-10px)', offset: 0 }),
        style({ transform: 'translateY(0)', offset: 1 })
      ]))
    ]),

    transition(':leave', [ // void <=> * or void => *, * => void
        animate(500, keyframes([
          style({ transform: 'translateY(0)', offset: 0 })
        ]))
      ]),
  ])