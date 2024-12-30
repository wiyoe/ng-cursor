import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="container py-5">
      <h1 class="mb-4">Terms of Service</h1>
      
      <div class="mb-4">
        <h5>1. Acceptance of Terms</h5>
        <p>By accessing and using Task Manager, you accept and agree to be bound by the terms and conditions of this agreement.</p>
      </div>

      <div class="mb-4">
        <h5>2. Use License</h5>
        <p>Permission is granted to temporarily use Task Manager for personal, non-commercial purposes only.</p>
        <ul>
          <li>You must not modify or copy the materials</li>
          <li>You must not use for commercial purposes</li>
          <li>You must not attempt to reverse engineer any software</li>
        </ul>
      </div>

      <div class="mb-4">
        <h5>3. Disclaimer</h5>
        <p>The materials on Task Manager are provided on an 'as is' basis. Task Manager makes no warranties, expressed or implied.</p>
      </div>

      <div>
        <h5>4. Limitations</h5>
        <p>Task Manager shall not be held liable for any damages arising out of the use or inability to use these materials.</p>
      </div>
    </div>
  `,
  styles: [`
    h5 { color: #212529; margin-bottom: 1rem; }
    ul { margin-bottom: 1rem; }
  `]
})
export class TermsComponent {} 