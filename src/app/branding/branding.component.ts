import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {
  constructor(private translate: TranslateService) {}

  get illustrationPath(): string {
    const lang = this.translate.currentLang;
    return `task-manager-${lang}.svg`;
  }
} 