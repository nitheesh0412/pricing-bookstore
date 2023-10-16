import { Component, INJECTOR, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing';
  card1: string[] = ["10 users included", "2 GB of storage", "Email support"];
  card2: string[] = ["20 users included", "10 GB of storage", "Priority email support"];
  card3: string[] = ["30 users included", "15 GB of storage", "Phone and email support"];
  
}
