import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapasComplementaresComponent } from './etapas-complementares.component';
import { ScopoService } from './scopo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

fdescribe('EtapasComplementaresComponent', () => {
  let component: EtapasComplementaresComponent;
  let lancamentoScopo: ScopoService;
  let fixture: ComponentFixture<EtapasComplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapasComplementaresComponent ],
      providers:[ScopoService],
      imports:[HttpClientModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapasComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const fakeCategory = [
      {

      results:
      {
            package:{
               name:'@angular/cli',
               scope:'angular',
               version:'12.1.0',
               description:'CLI tool for Angular',
               keywords:[
                  'angular',
                  'Angular CLI',
                  'devkit',
                  'sdk',
                  'Angular DevKit',
                  'angular-cli'
               ],
               date:'2021-06-25T00:54:33.247Z',
               links:{
                  npm:'https://www.npmjs.com/package/%40angular%2Fcli',
                  homepage:'https://github.com/angular/angular-cli',
                  repository:'https://github.com/angular/angular-cli',
                  bugs:'https://github.com/angular/angular-cli/issues'
               },
               author:{
                  name:'Angular Authors'
               },
               publisher:{
                  username:'google-wombot',
                  email:'node-team-npm+wombot@google.com'
               },
               maintainers:[
                  {
                     username:'angular',
                     email:'devops+npm@angular.io'
                  },
                  {
                     username:'angular-cli',
                     email:'hansl@google.com'
                  },
                  {
                     username:'google-wombot',
                     email:'node-team-npm+wombot@google.com'
                  }
               ]
            },
            score:{
               final:0.7897821650879504,
               detail:{
                  quality:0.7422450325105932,
                  popularity:0.6299358622227942,
                  maintenance:0.9903745815908414
               }
            },
            searchScore:0.26011872
         }
        }
    ]

    const array =[1,2,3,4,5,6,7]
    const obsof1=of(array);

    lancamentoScopo = TestBed.inject(ScopoService);
    spyOn(lancamentoScopo,"outroRetornaGenerico");

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should Haroldo', () => {
  //   let value:[]

  //   component.ngOnInit();
  //   value = component.totalNovo
  //   expect(value).toEqual(fakeCategory);
  // });
});
