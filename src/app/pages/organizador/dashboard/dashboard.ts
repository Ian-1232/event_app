import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly indicators = [
    { label: 'Eventos activos', value: '8', change: '+2 este mes' },
    {
      label: 'Entradas vendidas',
      value: '1,284',
      change: '+12% vs. mes anterior',
    },
    { label: 'Ingresos', value: 'S/ 48,920', change: 'Actualizado hoy' },
  ];

  protected readonly chartBars = [28, 44, 36, 64, 52, 70, 46];

  protected readonly upcomingEvents = [
    {
      date: '13 NOV',
      name: 'Concierto Aurora',
      status: 'Publicado',
      statusClass: 'published',
    },
    {
      date: '21 NOV',
      name: 'TechFest Lima',
      status: 'Borrador',
      statusClass: 'draft',
    },
  ];

  protected readonly events = [
    {
      name: 'Concierto Aurora',
      date: '13 nov 2026',
      status: 'Publicado',
      statusClass: 'published',
      action: 'Ver detalles',
    },
    {
      name: 'TechFest Lima',
      date: '21 nov 2026',
      status: 'Borrador',
      statusClass: 'draft',
      action: 'Editar',
    },
    {
      name: 'Noches de Teatro',
      date: '29 nov 2026',
      status: 'Publicado',
      statusClass: 'published',
      action: 'Ver detalles',
    },
    {
      name: 'Festival Gastronómico',
      date: '05 dic 2026',
      status: 'En revisión',
      statusClass: 'review',
      action: 'Editar',
    },
  ];
}
