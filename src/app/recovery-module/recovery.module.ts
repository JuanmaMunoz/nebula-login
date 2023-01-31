import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

const routes = [
  {
    path: '',
    component: RecoveryPasswordComponent,
  },
];

@NgModule({
  declarations: [RecoveryPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule,  RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryModule {}
