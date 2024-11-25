import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactCustomerForm: FormGroup = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
    message: new FormControl('')
  });
  formData: any;
  formId = 338;
  formSubmitted: any;
  
  constructor(private sharedService: SharedService){}

  errorHandling = (val: string) => {
    return this.contactCustomerForm.controls[val];
  }

  ngOnInit() {
  }

  onSubmit(info: any) {
    const formData: any = new FormData();
    formData.append('post_id', this.formId);
    formData.append('form_id', '5b40a380');
    formData.append('referer_title', 'Contact Us');
    formData.append('queried_id', this.formId);
    formData.append('form_fields[name]', this.contactCustomerForm.get('name')?.value);
    formData.append('form_fields[email]', this.contactCustomerForm.get('email')?.value);
    formData.append('form_fields[field_5057311]', this.contactCustomerForm.get('phoneNumber')?.value);
    formData.append('form_fields[field_71766c7]', this.contactCustomerForm.get('message')?.value);
    formData.append('action', 'elementor_pro_forms_send_form');
    formData.append('referrer', 'https://vgprofessionals.com/contact-us/');

    if(info.name || info.email || info.phoneNumber ) {
      this.sharedService.contactUs(formData).subscribe( res => {
        this.formSubmitted = res;
        this.contactCustomerForm.reset();
      }, err => {
        console.log(err);
      });

  }
  }
}
