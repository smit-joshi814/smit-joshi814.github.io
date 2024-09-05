import { FixedComponent } from './layouts/fixed/fixed.component';
import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ResponsiveComponent } from './layouts/responsive/responsive.component';
import { FluidComponent } from './layouts/fluid/fluid.component';
import { FlexibleComponent } from '../app/layouts/flexible/flexible.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Info',
    component: InfoComponent,
  },
  {
    path: 'fixed',
    title: 'Fixed Layout',
    component: FixedComponent,
  },
  {
    path: 'flexible',
    title: 'Flexible Layout',
    component: FlexibleComponent,
  },
  {
    path: 'fluid',
    title: 'Fluid Layout',
    component: FluidComponent,
  },
  {
    path: 'responsive',
    title: 'Responsive Layout',
    component: ResponsiveComponent,
  },
  {
    path: '**',
    component:InfoComponent,
    pathMatch: 'full',
  },
];
