import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  
  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Photography',
      isChecked: true
    },
    {
      id: 'C002',
      label: 'Writing',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Painting',
      isChecked: true
    }
  ]

  checkFormGroup = new FormGroup({
    checkboxFormControl: new FormArray([])
  })

  
  ngOnInit(){
    this.checkboxesDataList.forEach((data) => {
      (<FormArray>this.checkFormGroup.get("checkboxFormControl")).push(new FormControl(data.isChecked))
    })
  }

  get checkBoxControl(){
    return (<FormArray>this.checkFormGroup.get("checkboxFormControl"));
  }

  updatCheckBox(){
    this.checkboxesDataList.forEach((data,index) => {
      this.checkBoxControl.controls[index].setValue(data.isChecked);
   })
  }

  clearCheckBox(){
    this.checkboxesDataList.forEach((data,index) => {
      this.checkBoxControl.controls[index].reset(false);;
   })
  }

}
