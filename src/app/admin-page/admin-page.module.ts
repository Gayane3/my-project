import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [
    DashboardComponent,
    AdminPageComponent,
    AppNavbarComponent,
    MenusComponent,
    PostsComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    MatInputModule,
    MatTableModule
  ]
})
export class AdminPageModule { }
