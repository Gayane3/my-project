import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfService } from './providers/af.service';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { MaterialModule } from './material.module';
import { MenusService } from './service/menus/menus.service';
import { PostsService } from './service/posts/posts.service';
import { FrontPageComponent } from './front-page/front-page.component';
import { PagesListComponent } from './front-page/pages-list/pages-list.component';
import { AppNavbarComponent } from './front-page/app-navbar/app-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FrontPageComponent,
    PagesListComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [AfService, AdminGuard, SubscriberGuard, MenusService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
