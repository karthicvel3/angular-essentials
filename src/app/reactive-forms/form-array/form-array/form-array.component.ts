import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {

  singleArrayForm = new FormGroup({
     skills: new FormArray([])
  });
  

  formArraySample = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    questions: new FormArray([
      new FormGroup({
        test1: new FormControl(''),
        test2: new FormControl('')
      })
    ])
  })


  get singleControl(){
    return (<FormArray>this.singleArrayForm.get('skills'))
  }

  onAddSkill(){
    const customControls = new FormControl('');
    (<FormArray>this.singleArrayForm.get('skills')).push(customControls)
  }
  
  onSubmitSkill(){
    console.log(this.singleArrayForm);
  }

  onQuestions(){
    (this.formArraySample.get("questions") as FormArray).push(this.formGroupCustom());
  }

  formGroupCustom(){
    return new FormGroup({
      test1: new FormControl(''),
      test2: new FormControl('')
    })
  }

  get customControl(){
    return (this.formArraySample.get("questions") as FormArray)
  }

  onRemoveItem(index:number){
    this.customControl.removeAt(index);
  }

  onRemove(index:number){
    this.singleControl.removeAt(index);
  }

  onSubmit(){
    console.log(this.formArraySample)
  }

  reverssString(str: string){
    return str.split('').reverse().join('');
  } 


}
