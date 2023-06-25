import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('',  [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const {firstName, email, message} = this.profileForm.value;

    if(firstName && email && message){
      this.info = true
      this.validate = false

      //clear input
      this.profileForm.reset();
    }else{
      this.validate = true
    } 
  }
  info:boolean = false;
  validate:boolean = false;
}
