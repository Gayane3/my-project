import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./front-page/front-page.module').then(mod => mod.FrontPageModule),},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(mod => mod.AdminPageModule), canActivate: [AdminGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
