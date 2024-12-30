import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements AfterViewInit {
  ngAfterViewInit() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-bs-target')?.substring(1);
        const content = document.getElementById(target!);
        
        // Toggle current panel
        button.classList.toggle('collapsed');
        content?.classList.toggle('show');
        
        // Close other panels
        accordionButtons.forEach(otherButton => {
          if (otherButton !== button) {
            const otherId = otherButton.getAttribute('data-bs-target')?.substring(1);
            const otherContent = document.getElementById(otherId!);
            otherButton.classList.add('collapsed');
            otherContent?.classList.remove('show');
          }
        });
      });
    });
  }
} 