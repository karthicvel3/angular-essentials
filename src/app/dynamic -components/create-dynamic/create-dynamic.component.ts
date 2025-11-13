import { Component, ComponentRef, inject, input, Input, output, viewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-create-dynamic',
  imports: [],
  templateUrl: './create-dynamic.component.html',
  styleUrl: './create-dynamic.component.css'
})
export class CreateDynamicComponent {
  inputvalue = input('demo')
  outputvalue = output()


  destoryComponents(){
    this.outputvalue.emit()
  }

}
