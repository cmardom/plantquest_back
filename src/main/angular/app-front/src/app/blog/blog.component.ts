import { Component } from '@angular/core';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [VerticalTimelineComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
