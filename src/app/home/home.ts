import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly categories = ['Todos', 'Música', 'Tecnología', 'Cultura'];

  protected readonly events = [
    {
      category: 'MÚSICA EN VIVO',
      name: 'Concierto Aurora',
      date: 'Vie, 13 de noviembre · 21:00',
      location: 'Arena 1 · San Miguel',
      price: 'Desde S/ 79',
      visual: 'music',
    },
    {
      category: 'TECNOLOGÍA',
      name: 'TechFest Lima',
      date: 'Sáb, 21 de noviembre · 09:00',
      location: 'Centro de Convenciones',
      price: 'Desde S/ 120',
      visual: 'technology',
    },
    {
      category: 'ARTES ESCÉNICAS',
      name: 'Noches de Teatro',
      date: 'Dom, 29 de noviembre · 19:30',
      location: 'Teatro Municipal',
      price: 'Desde S/ 45',
      visual: 'arts',
    },
  ];
}
