import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { Graphics1Component } from "./pages/graphics1/graphics1.component";
import { NoPageFoundComponent } from "./pages/no-page-found/no-page-found.component";
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'graphics1',
        component: Graphics1Component
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
