import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: 'features', component: FeaturesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
