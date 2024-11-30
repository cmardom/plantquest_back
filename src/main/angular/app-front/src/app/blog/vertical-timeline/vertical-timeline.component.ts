import { NgFor } from '@angular/common';
import { Component, computed, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.scss'
})

export class VerticalTimelineComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() date!: Date;
  @Input() tags: Link[] = [];

  textDate = computed(() => {
    return Intl.DateTimeFormat('es', {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date(this.date)).replace(/ de/g, " ");
  } );


}

type Link = {
  url: string;
  title: string;
}
