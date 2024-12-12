import { Component } from '@angular/core';
import {faq} from "../interfaces/faq";
import {PlantaService} from "../services/planta.service";
import {FaqService} from "../services/faq.service";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: faq[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.faqService.getFAQs()
      .subscribe(faqs => {
        this.faqs = faqs;
        this.isLoading = false;
      });
  }

  constructor(private faqService: FaqService) {  }


}
