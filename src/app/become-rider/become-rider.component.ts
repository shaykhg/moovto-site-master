import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UtilService} from '../service/utils.service';
import {TranslationService} from '../service/translation.service';

@Component({
  selector: 'app-become-rider',
  templateUrl: './become-rider.component.html',
  styleUrls: ['./become-rider.component.scss']
})
export class BecomeRiderComponent implements OnInit {
  riderForm = this.formBuilder.group({
    name: [''],
    vehicle: [''],
    personalId: [''],
    companyName: [''],
    businessId: [''],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^.+@[^\\.].*\\.[a-z]{2,}$')]],
    phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
  });
  progress = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public util: UtilService,
              public translate: TranslationService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.riderForm.valid) {
      console.log('rider form value', this.riderForm.valid);
      const body = {
        to: 'sherjeelk@hotmail.com',
        // to: 'gaurav.rawat@litcode.io',
        name: this.riderForm.value.name,
        subject: 'Wants to join as rider',
        type: 'Rider',
        text: `Hi this is email is from ${this.riderForm.value.name}, \n and company name -  ${this.riderForm.value.msg}, \n  ${this.riderForm.value.name} is using ${this.riderForm.value.vehicle} as vehicle, \n  personal id  is  ${this.riderForm.value.personalId} and business id is  ${this.riderForm.value.businessId},phone is ${this.riderForm.value.phone},email is ${this.riderForm.value.email}`,
        html: `<p>Hi this email is  from <b>${this.riderForm.value.name}</b>,</p>
                <p><b>Company name</b> ${this.riderForm.value.companyName}</p>
                 <p><b>Vehicle</b> ${this.riderForm.value.vehicle}</p>
                 <p><b>Personal Id</b> ${this.riderForm.value.personalId}</p>
                 <p><b>Business Id</b> ${this.riderForm.value.businessId}</p>
                 <p><b>Phone</b> ${this.riderForm.value.phone}</p>
                 <p><b>Email</b> ${this.riderForm.value.email}</p>`
      };
    }
    else {
      this.util.presentSnackBar('The form is not valid');
    }

  }


  sendEmail(): any {
    this.progress = true;
    const body = {
      to: 'sherjeelk@hotmail.com',
      // to: 'gaurav.rawat@litcode.io',
      name: this.riderForm.value.name,
      subject: 'Wants to join as rider',
      type: 'Rider',
      text: `Hi this is email is from ${this.riderForm.value.name}, \n and company name -  ${this.riderForm.value.msg}, \n  ${this.riderForm.value.name} is using ${this.riderForm.value.vehicle} as vehicle, \n  personal id  is  ${this.riderForm.value.personalId} and business id is  ${this.riderForm.value.businessId},phone is ${this.riderForm.value.phone},email is ${this.riderForm.value.email}`,
      html: `<p>Hi this email is  from <b>${this.riderForm.value.name}</b>,</p>
                <p><b>Company name</b> ${this.riderForm.value.companyName}</p>
                 <p><b>Vehicle</b> ${this.riderForm.value.vehicle}</p>
                 <p><b>Personal Id</b> ${this.riderForm.value.personalId}</p>
                 <p><b>Business Id</b> ${this.riderForm.value.businessId}</p>
                 <p><b>Phone</b> ${this.riderForm.value.phone}</p>
                 <p><b>Email</b> ${this.riderForm.value.email}</p>`
    };

    this.http.post('https://www.easyshifters.com/api/sendEmail', body).subscribe(res => {
      // this.riderForm.reset(this.riderForm.value);
      console.log('Email sent successfully', res);
      this.util.presentSnackBar('Email sent successfully');
      this.riderForm.reset();
      this.progress = false;

    }, error => {
      console.log('An error occurred while sending mail', error);
      this.util.presentSnackBar('An error occurred while sending mail');
      this.progress = false;
    });
  }


}
