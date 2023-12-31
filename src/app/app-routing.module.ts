import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HodRegistrationComponent } from './registration/hod-registration/hod-registration.component';
import { StaffRegistrationComponent } from './registration/staff-registration/staff-registration.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { LeaveApplicationFormComponent } from './leave-application-form/leave-application-form.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
    children: [
      { path: '', redirectTo: 'hod', pathMatch: 'full' },
      { path: 'hod', component: HodRegistrationComponent },
      { path: 'staff', component: StaffRegistrationComponent }
    ]
  },
  { path: 'hod-dashboard', component: HodDashboardComponent }, 
  { path: 'staff-dashboard', component: StaffDashboardComponent }, 
  { path: 'leave-application-form', component: LeaveApplicationFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
