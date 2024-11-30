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
  @Input() date!: string;
  @Input() tags: Link[] = [];

  cleanDate = computed(() => this.date.replace(',', ''));
}

type Link = {
  url: string;
  title: string;
}
