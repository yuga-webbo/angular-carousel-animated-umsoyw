import { Component, Input } from '@angular/core';
import { trigger, style, animate, state, transition, 
  keyframes, group, query } from '@angular/animations';

@Component({
  selector: 'carousel',
  template: `
    <section class="slide-container" [@slide]="active">
      <section>
        <article *ngFor="let slide of slides; let i = index" [style.z-index]="i === active ? 1 : 0">
          <span>{{ slide }}</span>
        </article>
      </section>
    </section>
    <p><b>Active:</b> {{ active }}</p>
    <button (click)="change(-1)">Prev</button>
    <button (click)="change(1)">Next</button>
  `,
  styles: [`
    .slide-container {
      padding: 1rem;
    }

    .slide-container section {
      position: relative;
      width: 600px;
      height: 400px;
    }

    article {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      background: linear-gradient(45deg, #fff, #ddd);
      font-size: 2rem;
    }
  `],
  animations: [
    trigger('slide', [
      // left
      transition(':decrement', [
        style({ background: 'blue' }),
        animate(1000, style({ background: 'transparent' })),
      ]),
      // right
      transition(':increment', [
        style({ background: 'red' }),
        animate(1000, style({ background: 'transparent' })),
      ]),
    ]),
  ],
})
export class CarouselComponent  {
  active = 0;
  slides = [0, 1, 2, 3];

  change(amount: number) {
    let index = this.active += amount;
    const last = this.slides.length - 1;
    if (index > last) {
      index = 0;
    } else if (index < 0) {
      index = last;
    }
    this.active = index;
  }
}
