import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bi-list-check',
      title: 'Task Management',
      description: 'Create, edit, and organize your tasks efficiently'
    },
    {
      icon: 'bi-tags',
      title: 'Categories',
      description: 'Categorize tasks for better organization'
    },
    {
      icon: 'bi-clock-history',
      title: 'Task History',
      description: 'Track task creation and completion times'
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Friendly',
      description: 'Access your tasks on any device'
    }
  ];
} 