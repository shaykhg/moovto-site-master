import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {TranslationService} from '../service/translation.service';

@Component({
  selector: 'app-parcel-delivery',
  templateUrl: './parcel-delivery.component.html',
  styleUrls: ['./parcel-delivery.component.scss']
})
export class ParcelDeliveryComponent implements OnInit {

  images: boolean[] = [];
  constructor(public translate: TranslationService) { }

  ngOnInit(): void {
    this.images = _.times(5, _.constant(false));
    this.images[0] = true;
    console.log('this is image', this.images);
  }

  setStyle(num: number): any {
    // loadsh set all false
    _.fill(this.images, false);
    console.log(this.images);
    this.images[num] = true;
  }

  getStyle(i: number, type: number): any {
    if (type === 1) {
      return this.images[i] ? 'text-main-cont-active row' : 'text-main-cont row';
    } else if (type === 2) {
      return this.images[i] ? 'num-circle-active' : 'num-circle';
    }else if (type === 3) {
      return this.images[i] ? 'text-main-cont-active-right row' : 'text-main-cont-right row';
    }
  }

}




