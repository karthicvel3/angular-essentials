import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  name = new FormControl('Angular Forms');  
}
