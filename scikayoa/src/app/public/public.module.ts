import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent } from './pages/team/team.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PricingComponent,
    ProjectComponent,
    ServiceComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: []

})
export class PublicModule { }
