import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainComponent } from './main/main.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { BrandingComponent } from './branding/branding.component';

export const routes: Routes = [
  { path: '', component: BrandingComponent },
  { path: 'main', component: MainComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent }
];
