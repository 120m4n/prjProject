import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminComponent } from './admin/admin.component';

import { ProfileComponent } from './profile/profile.component';
import { RoleGuardService } from './services/role-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'padre', 
    component: PadreComponent,
    canActivate: [AuthGuardService] },
  { path: 'hijo', component: HijoComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService] 
  },
  { path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'admin' }
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
