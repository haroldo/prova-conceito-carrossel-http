import { Component, OnInit } from '@angular/core';
import { ScopoService } from './scopo.service';
import { HttpClient } from '@angular/common/http';
import { Maintainer, ScopoBaseModel } from './scopo-base.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-etapas-complementares',
  templateUrl: './etapas-complementares.component.html',
  styleUrls: ['./etapas-complementares.component.scss']
})
export class EtapasComplementaresComponent implements OnInit {

  totalAngularPackages:[]
  totalAngularPackagesA:any[] = []

  constructor( private scopo:ScopoService,
               private http:HttpClient ) { }

    ngOnInit(): void {
        //this.getss()
        //this.getsst()
      let list: Maintainer[] = [];
      this.scopo.outroRetornaGenerico().subscribe((ativo)=>{

        for (let res of ativo.results) {
          console.log('package',res.package.maintainers)
          //let stat = new Maintainer(res.username, res.email);
          list.push(res.package.maintainers);

      }

      console.log('list',list)

        this.totalAngularPackagesA = list

        //console.log('Maintainer',ativo.results.package.maintainers)
        console.log('results',ativo.results)


      })

    }



  getss():void{
    this.scopo.retornaGenerico().subscribe(data => {
        this.totalAngularPackages = data;
        console.log('data',data)
    })
  }



  getsst():void{
    this.scopo.outroRetornaGenerico().subscribe(data => {

      data.results.maintainers.map(r => {
        //limpa o array de registros se houver algum
        this.totalAngularPackagesA = new Array<Maintainer>();
            this.totalAngularPackagesA.push(r);

            console.log('Maintainer',this.totalAngularPackagesA)
        });

      //console.log('results',this.totalAngularPackagesA)
    })
  }


}
