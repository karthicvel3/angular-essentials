import { Component, ComponentRef, inject, QueryList, viewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { CreateDynamicComponent } from '../create-dynamic/create-dynamic.component';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  outputEvent =''
  viewChildRefernce = viewChild('container', {read:ViewContainerRef});
  componentRef?:ComponentRef<CreateDynamicComponent>;

  createDynamicComponent:CreateDynamicComponent
  components: ComponentRef<CreateDynamicComponent>[] = [];

  createComponents(){
    this.componentRef = this.viewChildRefernce()?.createComponent(CreateDynamicComponent)
    if (this.componentRef) {
      this.components.push(this.componentRef);
      this.componentRef?.setInput("inputvalue", "Input Value")
    }
  }

  destoryComponents(){
    if(this.componentRef)
      this.componentRef.instance.outputvalue.subscribe(val => console.log(val));
    
 // Find the component
    const component = this.components.find((component) => component.instance instanceof CreateDynamicComponent);
    if (component) {
      const componentIndex = this.components.indexOf(component);
      if (componentIndex !== -1) {
        console.log("Tested")
      }
    }
  }
}
