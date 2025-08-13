import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  CardImg = {
    modelo1: '../../../../../assets/img/notification_b.png',
    modelo2: '../../../../../assets/img/lamp_b.png',
    modelo3: '../../../../../assets/img/warning_b.png',
  };
  /* notação anotacao!: define 'assignment assertion' */
  @Input() anotacao!: {
    id: string;
    texto: string;
    autor: string;
    modelo: string;
    data: string;
  };
}
export const CardImg = {
  modelo1: '../../../../../assets/img/notification_b.png',
  modelo2: '../../../../../assets/img/lamp_b.png',
  modelo3: '../../../../../assets/img/warning_b.png',
};
