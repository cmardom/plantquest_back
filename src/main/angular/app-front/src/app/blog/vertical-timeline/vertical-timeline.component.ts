import { NgFor } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-vertical-timeline',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.scss'
})

export class VerticalTimelineComponent {
  @Input() title!: string;
  @Input() texto!: string;
  @Input() date!: Date;
  @Input() tags: Link[] = [];
  @Input() imagePath!: string;

  @Input() idClicado! : number | undefined;



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
