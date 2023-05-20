import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontRoutingModule } from './front-routing.module';
import { FrontPageComponent } from './front-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MaterialModule } from '../material.module';
import { PagesComponent } from '../front-pages/pages/pages.component';


@NgModule({
  declarations: [
 
  
    PagesComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule, 
    MaterialModule
  ],
  entryComponents: [PagesListComponent, HomePageComponent, FrontPageComponent,AppNavbarComponent
  ]
})
export class FrontPageModule { }
