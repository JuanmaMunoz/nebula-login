import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './login-module/components/login/login.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=> import('./login-module/login.module').then((m) => m.LoginModule),
  },
  {
    path:'login/recovery',
    loadChildren:()=> import('./recovery-module/recovery.module').then((m) => m.RecoveryModule),
  },
  /*{
    path:'**',redirectTo:'login'
  },*/
  {
    path:'**',component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF,useValue:'/'}]
})
export class AppRoutingModule { }
