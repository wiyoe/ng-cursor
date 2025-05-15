import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CustomerComment {
  id: number;
  name: string;
  position: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [TranslateModule, NgFor, RouterLink],
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent {
  customerComments: CustomerComment[] = [
    {
      id: 1,
      name: 'Emma Thompson',
      position: 'Marketing Director',
      company: 'Creative Solutions Ltd',
      comment: 'The platform has transformed how we manage our projects. Highly recommended!',
      rating: 5,
      avatar: 'https://picsum.photos/id/1027/200'
    },
    {
      id: 2,
      name: 'James Wilson',
      position: 'CTO',
      company: 'Tech Innovators Inc',
      comment: 'Exceptional user experience and robust features. A game-changer for our team.',
      rating: 5,
      avatar: 'https://picsum.photos/id/1025/200'
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      position: 'Project Lead',
      company: 'Digital Dynamics',
      comment: 'Intuitive interface and powerful collaboration tools. Exactly what we needed.',
      rating: 4,
      avatar: 'https://picsum.photos/id/1014/200'
    }
  ];
  constructor(private translate: TranslateService) {}

  get illustrationPath(): string {
    const lang = this.translate.currentLang;
    return `task-manager-${lang}.svg`;
  }
} 