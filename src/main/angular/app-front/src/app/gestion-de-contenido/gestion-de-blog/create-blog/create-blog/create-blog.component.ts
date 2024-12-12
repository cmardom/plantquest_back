import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {VolverComponent} from "../../../../volver/volver.component";
import {Blog} from "../../../../interfaces/blog";
import {BlogService} from "../../../../services/blog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-blog',
  standalone: true,
    imports: [
        FormsModule,
        VolverComponent,
        NgIf
    ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent implements OnInit{
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


