import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

export const routes: Routes = [
   
    // pour charger le public module
    {
      path: '',
      loadChildren: () =>
        import('./public/public.module').then((m) => m.PublicModule),
    },
    
    // pour charger le secure module
    {
      path: 'auth',
      loadChildren: () =>
        import('./secure/secure.module').then((m) => m.SecureModule),
    },
    
  
  
  ];
  
  @NgModule({
    imports: [
      // PublicModule,
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
