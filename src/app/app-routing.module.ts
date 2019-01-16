import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginformComponent } from './shared/loginform/loginform.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
	{
		path: '',
		component: LoginformComponent
	},
	{
		path: 'dashboard',
		canActivate: [AuthGuard],
		component: DashboardComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
