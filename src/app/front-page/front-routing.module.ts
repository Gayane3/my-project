import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';
import { PagesComponent } from '../front-pages/pages/pages.component';


const routes: Routes = [
  {
    path: '', 
    component: FrontPageComponent, 
    children: [
    {
        path: "home", 
        component: HomePageComponent
    },
   
  {
    path: 'article', 
    component: PagesListComponent
},
{
    path: 'pages/:url', 
    component: PagesComponent
},

    {
      path: '**', 
      redirectTo: "home", pathMatch: 'full'
    },
    
  ]}
];

export const FrontRoutingModule = RouterModule.forChild(routes)
