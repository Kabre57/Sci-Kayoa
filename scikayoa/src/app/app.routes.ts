import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'about_us', component: AboutUsComponent },
    // { path: 'contact_us', component: ContactUsComponent },
    
    // pour charger le public module
    {
      path: '',
      loadChildren: () =>
        import('./public/public.module').then((m) => m.PublicModule),
    },
    
  // <div class="main-wrapper home-six">
  // <app-header></app-header>
  // <p>blog works!</p>
  //  <app-footer></app-footer>
  // </div>
  
    // pour charger le secure module
    {
      path: 'auth',
      loadChildren: () =>
        import('./secure/secure.module').then((m) => m.SecureModule),
    },
    
  
  
  ];
  
  @NgModule({
    imports: [
      PublicModule,
      SecureModule,
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
