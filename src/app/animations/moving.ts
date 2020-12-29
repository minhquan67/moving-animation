import { trigger, state, style, transition, animate, animation, useAnimation } from '@angular/animations';

let fadeAnimation = animation([
        animate('{{ time }}')
    ],
    { params: { time: '1000ms'}}
);
export const moveToMouseClickPosition = trigger('divState',[
    state('*', 
        style({
            left: `{{page_left}}`,
            top: `{{ page_top}}`,
            width: `50px`,
            height: `50px`,
        }), {params: {page_left: '0', page_top: '0'}}
    ),
    transition('* <=> *',
        useAnimation(fadeAnimation, {
            params: {
                time:  `{{ speed }}s`
            }
        })
    )
])