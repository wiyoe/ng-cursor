import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container py-4">
      <h2 class="mb-4">{{ 'references.title' | translate }}</h2>
      <div class="row g-4">
        <!-- Reference Cards -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ 'references.companies.techSolutions.name' | translate }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ 'references.companies.techSolutions.project' | translate }}</h6>
              <p class="card-text">{{ 'references.companies.techSolutions.description' | translate }}</p>
              <div class="d-flex align-items-center mt-3">
                <img [src]="references[0].avatar" class="rounded-circle me-2" width="40" height="40" [alt]="'references.companies.techSolutions.contact' | translate">
                <div>
                  <div class="fw-bold">{{ 'references.companies.techSolutions.contact' | translate }}</div>
                  <small class="text-muted">{{ 'references.companies.techSolutions.position' | translate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ 'references.companies.globalInnovations.name' | translate }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ 'references.companies.globalInnovations.project' | translate }}</h6>
              <p class="card-text">{{ 'references.companies.globalInnovations.description' | translate }}</p>
              <div class="d-flex align-items-center mt-3">
                <img [src]="references[1].avatar" class="rounded-circle me-2" width="40" height="40" [alt]="'references.companies.globalInnovations.contact' | translate">
                <div>
                  <div class="fw-bold">{{ 'references.companies.globalInnovations.contact' | translate }}</div>
                  <small class="text-muted">{{ 'references.companies.globalInnovations.position' | translate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ 'references.companies.digitalDynamics.name' | translate }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ 'references.companies.digitalDynamics.project' | translate }}</h6>
              <p class="card-text">{{ 'references.companies.digitalDynamics.description' | translate }}</p>
              <div class="d-flex align-items-center mt-3">
                <img [src]="references[2].avatar" class="rounded-circle me-2" width="40" height="40" [alt]="'references.companies.digitalDynamics.contact' | translate">
                <div>
                  <div class="fw-bold">{{ 'references.companies.digitalDynamics.contact' | translate }}</div>
                  <small class="text-muted">{{ 'references.companies.digitalDynamics.position' | translate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ 'references.companies.smartSystems.name' | translate }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ 'references.companies.smartSystems.project' | translate }}</h6>
              <p class="card-text">{{ 'references.companies.smartSystems.description' | translate }}</p>
              <div class="d-flex align-items-center mt-3">
                <img [src]="references[3].avatar" class="rounded-circle me-2" width="40" height="40" [alt]="'references.companies.smartSystems.contact' | translate">
                <div>
                  <div class="fw-bold">{{ 'references.companies.smartSystems.contact' | translate }}</div>
                  <small class="text-muted">{{ 'references.companies.smartSystems.position' | translate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ 'references.companies.futureTech.name' | translate }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ 'references.companies.futureTech.project' | translate }}</h6>
              <p class="card-text">{{ 'references.companies.futureTech.description' | translate }}</p>
              <div class="d-flex align-items-center mt-3">
                <img [src]="references[4].avatar" class="rounded-circle me-2" width="40" height="40" [alt]="'references.companies.futureTech.contact' | translate">
                <div>
                  <div class="fw-bold">{{ 'references.companies.futureTech.contact' | translate }}</div>
                  <small class="text-muted">{{ 'references.companies.futureTech.position' | translate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ 'references.companies.innovativeSoftware.name' | translate }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ 'references.companies.innovativeSoftware.project' | translate }}</h6>
              <p class="card-text">{{ 'references.companies.innovativeSoftware.description' | translate }}</p>
              <div class="d-flex align-items-center mt-3">
                <img [src]="references[5].avatar" class="rounded-circle me-2" width="40" height="40" [alt]="'references.companies.innovativeSoftware.contact' | translate">
                <div>
                  <div class="fw-bold">{{ 'references.companies.innovativeSoftware.contact' | translate }}</div>
                  <small class="text-muted">{{ 'references.companies.innovativeSoftware.position' | translate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      transition: transform 0.2s;
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-title {
      color: #2c3e50;
    }
    .card-subtitle {
      color: #7f8c8d;
    }
  `]
})
export class ReferencesComponent {
  references = [
    {
      company: 'Tech Solutions Inc.',
      project: 'Enterprise Task Management System',
      description: 'Implemented a comprehensive task management solution that improved team productivity by 40%.',
      contact: 'Sarah Johnson',
      position: 'Project Manager',
      avatar: 'https://picsum.photos/id/1005/200'
    },
    {
      company: 'Global Innovations',
      project: 'Agile Project Tracker',
      description: 'Developed a custom project tracking system that streamlined workflow processes.',
      contact: 'Michael Chen',
      position: 'CTO',
      avatar: 'https://picsum.photos/id/1012/200'
    },
    {
      company: 'Digital Dynamics',
      project: 'Collaborative Workspace Platform',
      description: 'Created an intuitive workspace solution that enhanced team collaboration and communication.',
      contact: 'Emma Davis',
      position: 'Operations Director',
      avatar: 'https://picsum.photos/id/1027/200'
    },
    {
      company: 'Smart Systems Ltd.',
      project: 'Team Collaboration Suite',
      description: 'Built a comprehensive team collaboration platform that increased cross-team productivity by 35%.',
      contact: 'Alex Thompson',
      position: 'Head of Engineering',
      avatar: 'https://picsum.photos/id/1074/200'
    },
    {
      company: 'Future Tech Solutions',
      project: 'Project Management Dashboard',
      description: 'Designed and implemented an intuitive project management dashboard with real-time analytics.',
      contact: 'Maria Rodriguez',
      position: 'Product Manager',
      avatar: 'https://picsum.photos/id/1011/200'
    },
    {
      company: 'Innovative Software Co.',
      project: 'Resource Planning System',
      description: 'Developed an enterprise resource planning system that optimized resource allocation by 45%.',
      contact: 'David Kim',
      position: 'Technical Director',
      avatar: 'https://picsum.photos/id/1076/200'
    }
  ];

  constructor() {}
}
