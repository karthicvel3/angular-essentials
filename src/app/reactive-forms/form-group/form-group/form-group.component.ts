import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
    initalValue:any;

    formGroupSample = new FormGroup({
      fname : new FormControl("Karthicvel"),
      lname : new FormControl("M V"),
      skill : new FormControl("Angular"),
   });

   nestedFormGroupSample = new FormGroup({
        fname : new FormControl("Karthicvel"),
        lname : new FormControl("M V"),
        skill : new FormControl("Angular"),
        innerFormGroupSample: new FormGroup({
          fname : new FormControl("Karthicvel"),
          lname : new FormControl("M V"),
          skill : new FormControl("Angular"),
      })
    });

   ngOnInit(){
     this.initalValue =  this.formGroupSample.value;
   }

   onSubmit(){
    
   }

   onClear(){
    this.formGroupSample.reset()
   }

   onReset(){
    this.formGroupSample.reset(this.initalValue)
   }
  
}
