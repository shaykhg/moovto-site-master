import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../service/translation.service';



@Component({
  selector: 'app-parcel-return',
  templateUrl: './parcel-return.component.html',
  styleUrls: ['./parcel-return.component.scss']
})

export class ParcelReturnComponent implements OnInit {


  constructor(public translate: TranslationService) { }

  ngOnInit(): void {

  }




}
