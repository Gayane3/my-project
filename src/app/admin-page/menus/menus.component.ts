import { Component, ViewChild, OnInit, Inject} from '@angular/core';
import { MenusService, Menu } from 'src/app/service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit{

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  menuDetails : Menu = {
    title: "",
    url: ""
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ["id", "title", "url", "actions"];

  constructor(private menus: MenusService, public dialog: MatDialog){}

 ngOnInit(): void {
   this.menus.getMenus().subscribe((data: any)=> {
    this.dataSource.data = data;
   })
 }
 ngAfterViewInit(){
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
 }
 addMenu(){
  this.menus.addMenu(this.menuDetails)
 }

 applyFilter(filterValue: any){
  let value = (filterValue.target as HTMLInputElement).value;
  value = value.trim();
  value = value.toLocaleLowerCase();
  this.dataSource.filter = value;
 }

 editMenu(menuId: string, menu: Menu) {
  this.menus.updateMenu(menuId, menu)
 }
 deleteMenu(menuId: string) {
  this.menus.deleteMenu(menuId)
 }

 openDialog(menuId: string) {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
    width: '250px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result === 'true'){
      console.log("The dialog was closed" + menuId);
      this.deleteMenu(menuId)
  }
  });
}

openEditDialog(menuId: string, title: string, url: string): void {
  const dialogRef = this.dialog.open(EditMenuComponent, {
    width: '250px',
    data: {title, url}
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      console.log("The Edit dialog was closed");
      this.editMenu(menuId, result)

  }
  });
}
}
