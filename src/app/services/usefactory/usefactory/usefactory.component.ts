import { ApplicationRef, Component } from '@angular/core';
import { UseFactoryService } from '../usefactory.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-usefactory',
  imports: [],
  templateUrl: './usefactory.component.html',
  styleUrl: './usefactory.component.css'
})
export class UsefactoryComponent {

  factoryValue =false
  displayLogger=''

  constructor(private _testService:TestService,private _useFactoryService:UseFactoryService,
    private app: ApplicationRef
  ){
  }


  updatService(){
    this.factoryValue =!this.factoryValue;
    this._testService.setMode(this.factoryValue)
    this.app.tick();
  }

  getUpdate(){
    this.displayLogger = this._useFactoryService.logger()
  }

  useFactory=`
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class UseFactoryService {
  
    constructor() {  }
  
    logger(){
       return "Use Factory"
    }
  }
  `

  useFactoryNew=`
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class UseFactoryNewService {
  
    constructor() {  }
  
    logger(){
       return "Use Factory New"
    }
  }
  `

  useFactoryProvider =`
  import { Injectable } from '@angular/core';
  import { UseFactoryNewService } from './usefactory-new.service';
  import { TestService } from './test.service';
  
  @Injectable({
    providedIn: 'root',
    useFactory: (_testService: TestService) => {
      if (_testService.mode) {
        return new UseFactoryNewService
      } else {
        return new UseFactoryService
      }
    },
    deps:[TestService]
  })
  
  export class UseFactoryService {
  
    constructor() {
     }
  
    logger(){
       return "Use Factory"
    }
  }
  
  `

}
