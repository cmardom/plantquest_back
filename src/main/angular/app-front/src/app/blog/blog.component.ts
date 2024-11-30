import {Component, OnInit} from '@angular/core';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import {PlantaService} from "../services/planta.service";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../services/blog.service";
import {Blog} from "../interfaces/blog";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [VerticalTimelineComponent, NgForOf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit{

  blogs: Blog[] = [];
  constructor(private blogService: BlogService) {  }

  ngOnInit(){

    this.blogService.getBlogs().subscribe(data=>{
      this.blogs = data;
    })

  }

  getTags(tags: string): { title: string, url: string }[] {
    return tags.split(',').map(tag => ({
      title: tag.trim(),
      url: '#'  // You can adjust the URL if needed
    }));
  }

}
