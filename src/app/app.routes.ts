import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
