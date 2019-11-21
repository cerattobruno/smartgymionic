import { Component } from '@angular/core';
import { DjangoService } from '../../services/django.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  socios: any[] = [];

  constructor( private django: DjangoService) {

  }

  /*

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data["results"];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  */

}
