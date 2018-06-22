import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostBloodDonarsService } from '../post-blood-donars.service';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  groups = ['A+', 'B+', 'AB+', 'O+', 'A-', 'AB-', 'B-'];
  regForm: FormGroup;
  constructor(private builder: FormBuilder, private service: PostBloodDonarsService) { }

  ngOnInit() {
    this.regForm = this.builder.group({
      'fullName': new FormControl('', Validators.required),
      'dateOfBirth': new FormControl('', Validators.required),
      'gender': new FormControl(''),
      'bloodGroup': new FormControl(),
      'weight': new FormControl(),
      'contactNumbers': new FormGroup({
        'mobileNumber': new FormControl(),
        'landline': new FormControl()
      }),
      'city': new FormControl()
    });
  }

  submit() {
    console.log(this.regForm.value);
    this.service.onPostData(this.regForm.value).subscribe(data => console.log(data), err => console.log(err));
  }

}
