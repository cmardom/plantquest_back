import { Component } from '@angular/core';
import {BlogComponent} from "../blog/blog.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    BlogComponent,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
