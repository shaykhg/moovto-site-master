import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {UtilService} from '../service/utils.service';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  progress = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    stagePadding: 30,
    navSpeed: 700,
    margin: 50,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  queryForm =  this.formBuilder.group({
    name: ['', [Validators.required , Validators.minLength(1)]],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required, Validators.minLength(1)]],
    msg: ['', [Validators.required, Validators.minLength(1)]],
  });


  constructor(private http: HttpClient, private formBuilder: FormBuilder, public util: UtilService) {
    const platform = window.navigator.platform;
    console.log('this is the platform', platform);
  }

  ngOnInit(): void {
    // showTypeForm();
    // @ts-ignore
   //createWidget('FUFyZdpT', { container: document.querySelector('#form') });

  }


  sendEmail(): any {
    this.progress = true;
    const body = {
      to: 'sherjeelk@hotmail.com',
      // to: 'gaurav.rawat@litcode.io',
      name: this.queryForm.value.name,
      subject: this.queryForm.value.subject,
      type: 'customer',
      text: `Hi this is email is from ${this.queryForm.value.name}, \n ${this.queryForm.value.msg}`,
      html: `<p>Hi this is  query email  from ${this.queryForm.value.name},</p> <p> ${this.queryForm.value.msg},</p><br> <p>user emailid: ${this.queryForm.value.email}</p>`
    };

    this.http.post('https://www.easyshifters.com/api/sendEmail', body).subscribe(res => {
      console.log('Email sent successfully', res);
      this.util.presentSnackBar('Email Sent Successfully', );
      this.queryForm.reset();
      this.progress = false;
    }, error => {
      console.log('An error occurred while sending mail', error);
      this.util.presentSnackBar('An error occurred while sending mail');
      this.progress = false;

    });
  }
}
