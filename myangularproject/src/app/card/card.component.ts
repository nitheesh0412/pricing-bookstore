import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    // @Input = 
    @Input()  price1 : string="";
    @Input() version : string="";
    @Input() card : string[] = [];
}
