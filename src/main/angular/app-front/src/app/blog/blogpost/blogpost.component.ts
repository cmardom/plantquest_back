import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../interfaces/blog";
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.scss'
})
export class BlogpostComponent implements OnInit {
  blog: Blog | undefined;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute // Inject ActivatedRoute to get route params
  ) {
  }

  ngOnInit() {
    // Retrieve the 'id' from the path parameter
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(+id).subscribe(blogpost => {
        this.blog = blogpost;
        console.log('Blog retrieved: ', this.blog);
      });
    }

  }

}




