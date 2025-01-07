import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bi-list-check',
      key: 'taskManagement'
    },
    {
      icon: 'bi-tags',
      key: 'categories'
    },
    {
      icon: 'bi-clock-history',
      key: 'history'
    },
    {
      icon: 'bi-phone',
      key: 'mobile'
    }
  ];
} 