import { Result } from './scopo-base.model';

import { Component, OnInit } from '@angular/core';
import { ScopoService } from './scopo.service';

import { GitModel } from '../models/git.model';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-etapas-complementares',
  templateUrl: './etapas-complementares.component.html',
  styleUrls: ['./etapas-complementares.component.scss']
})
export class EtapasComplementaresComponent implements OnInit {

  // totalAngularPackages:Observable<GitModel[]>
  totalNovo:Result[]
  teste:any[]
  constructor(private scopo:ScopoService) { }

    ngOnInit(): void {
      this.scopo.outroRetornaGenerico()
      .subscribe((item:GitModel<Result>) => {


        this.totalNovo = item.results

        console.log('this.totalNovo',this.totalNovo)
        // console.log('this.totalNovo',item['results'])

      })


      // this.scopo.getEmployee()
      //   .subscribe((data:{}) => {
      //   console.log('data',data)
      // })




    }
  }

