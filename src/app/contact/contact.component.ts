import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SafePipe } from '../pipes/safe.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, SafePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private translate: TranslateService) {}

  get mapLocation(): string {
    return this.translate.currentLang === 'tr' 
      ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.0584252303!2d32.62259520709338!3d39.90329559177694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2sus!4v1709669151646!5m2!1sen!2sus'
      : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156740714!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647951865986!5w200!5h200';
  }
} 