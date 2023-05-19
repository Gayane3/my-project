import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; 



@NgModule({
    declarations: [
    
    ],
    imports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, 
        MatSortModule, MatPaginatorModule, MatDialogModule, MatSelectModule
    ],
    exports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, 
        MatSortModule, MatPaginatorModule, MatDialogModule, MatSelectModule
    ]
  })
  export class MaterialModule { }
  