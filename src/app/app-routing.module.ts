import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CommonModule } from '@angular/common';
import { HubComponent } from './hub/hub.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '',
    component: LandingComponent,
    data: { animationState: 'Landing' }
  },
  { path: 'Hub',
    component: HubComponent,
    data: { animationState: 'Hub' }
  },
  { path: 'AboutUs',
    component: AboutUsComponent,
    data: { animationState: 'About' }
  },
  { path: 'View',
    component: ViewComponent,
    data: { animationState: 'View' }
  },
  {
    path: '**',
    redirectTo: ''
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
