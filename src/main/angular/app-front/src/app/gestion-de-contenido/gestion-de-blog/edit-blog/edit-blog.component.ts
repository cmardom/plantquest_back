import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../../services/blog.service";
import { Blog } from "../../../interfaces/blog";
import {FormsModule, NgForm} from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {VolverComponent} from "../../../volver/volver.component";
import {NgIf} from "@angular/common";  // To get route parameters

@Component({
  selector: 'app-edit-blog',
  standalone: true,
  imports: [
    FormsModule,
    VolverComponent,
    NgIf
  ],
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  blog: Blog = {
    id: 0,
    tags: "",
    texto: "",
    titulo: "",
    date: new Date(),
    imagePath: ""
  };

  constructor(private blogService: BlogService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // If editing an existing blog, load the blog based on the ID from the URL
    const blogId = this.route.snapshot.paramMap.get('id');
    const id = Number(blogId);
    if (id){
      this.blogService.getBlogById(id).subscribe((blog: Blog) => {
        this.blog = blog;  // Populate the form with the existing blog data
      });
    }


  }

  onSubmit(blogForm: NgForm): void {
    if (!blogForm.valid) {
      return;
    }

    this.blogService.saveBlog(this.blog).subscribe(
      response => {
        console.log('Blog saved successfully:', response);
        this.router.navigate(['/gestion-de-contenido']);  // Redirect after successful save
      },
      error => {
        console.error('Error saving blog:', error);
        // Handle error (e.g., show a notification to the user)
      }
    );
  }
}
