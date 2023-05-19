import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list' 
import { MatNavList } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'; 
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 


@NgModule({
    declarations: [
    
    ],
    imports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, 
        MatTableModule, MatInputModule, MatFormFieldModule, MatSortModule, MatPaginatorModule
    ],
    exports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatNavList, 
        MatTableModule, MatInputModule, MatFormFieldModule, MatSortModule, MatPaginatorModule
    ]
  })
  export class MaterialModule { }
  