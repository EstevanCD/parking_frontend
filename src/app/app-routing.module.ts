import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: DataViewComponent}, // "home"
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
