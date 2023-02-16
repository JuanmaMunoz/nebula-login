import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './shared-module/components/empty-route/empty-route.component';
import { AuthGuard } from './login-module/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login/auth',
    canLoad: [AuthGuard],
    loadChildren: () => import('./login-module/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'login/recovery',
    loadChildren: () => import('./recovery-module/recovery.module').then((m) => m.RecoveryModule),
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
