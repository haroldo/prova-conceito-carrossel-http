import { Component, Input, OnInit } from '@angular/core';
import { GitModel } from '../models/git.model';
import { Result } from '../etapas-complementares/scopo-base.model';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input('totalNovo') totalNovo : GitModel[]


  constructor() { }

  ngOnInit(): void {



  }

}
