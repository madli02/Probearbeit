import { Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClient } from "@angular/common/http";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
];
