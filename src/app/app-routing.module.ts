import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProgressBarComponent} from "./pages/progress-bar/progress-bar.component";
import {GraphicsOneComponent} from "./pages/graphics-one/graphics-one.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {PagesComponent} from "./pages/pages/pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressBarComponent},
      {path: 'graphicsOne', component: GraphicsOneComponent},
      {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
    ]
  },

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
