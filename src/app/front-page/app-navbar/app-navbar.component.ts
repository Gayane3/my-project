import { Component, OnInit } from '@angular/core';
import { AfService } from '../../providers/af.service';
import { User } from '../../providers/user';
import { MenusService } from 'src/app/service/menus/menus.service';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit{
 user: User | null | undefined;
 menusList: any;

constructor(public afService: AfService, private menus: MenusService){}

ngOnInit(): void {
  this.afService.user$.subscribe( user => this.user = user);
  this.menus.getMenus().subscribe( menus => {
    this.menusList = menus;
  })
}

}
