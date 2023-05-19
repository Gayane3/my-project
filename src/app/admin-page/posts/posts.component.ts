import { Component, ViewChild, OnInit, Inject} from '@angular/core';
import { PostsService, Post } from 'src/app/service/posts/posts.service'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MenusService } from 'src/app/service/menus/menus.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  postDetails : Post = {
    title: "",
    menu_id: "",
    content: ""
  }
  menusList: any;

  postForm!: FormGroup;

  dataSource = new MatTableDataSource();
  displayedColumns = ["id", "title", "menu_id", "content", "actions"];

  constructor(private posts: PostsService, private menus: MenusService, public dialog: MatDialog, private fb: FormBuilder){
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      menu_id: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

 ngOnInit(): void {
   this.posts.getPosts().subscribe((data: any)=> {
    this.dataSource.data = data;
   })
   this.menus.getMenus().subscribe((data: any) => {
      this.menusList = data;
   })
 }
 ngAfterViewInit(){
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
 }
 addPost(){
  this.posts.addPost(this.postForm.value)
 }

 applyFilter(filterValue: any){
  let value = (filterValue.target as HTMLInputElement).value;
  value = value.trim();
  value = value.toLocaleLowerCase();
  this.dataSource.filter = value;
 }

 editPost(postId: string, post: Post) {
  this.posts.updatePost(postId, post)
 }
 deletePost(postId: string) {
  this.posts.deletePost(postId)
 }

 openDialog(postId: string) {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
    width: '250px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result === 'true'){
      console.log("The dialog was closed" + postId);
      this.deletePost(postId)
  }
  });
}

openEditDialog(postId: string, title: string, menu_id: string, content: string): void {
  const dialogRef = this.dialog.open(EditPostComponent, {
    width: '250px',
    data: {title, menu_id, content, "menus": this.menusList}
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      console.log("The Edit dialog was closed");
      this.editPost(postId, result)

  }
  });
}
}
