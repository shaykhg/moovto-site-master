import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from '../service/api-service.service';
import {Categories} from '../models/categories';
import {Vehicle} from '../models/vehciles';
import {Service} from '../models/service';
import {Router} from '@angular/router';
import {Subcategories} from '../models/subCategories';
import {Charges} from '../models/charges';
import * as _ from 'lodash';
import {TranslationService} from '../service/translation.service';
import {ExtraCharges} from '../models/extraCharges';
import {MatSnackBar} from '@angular/material/snack-bar';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';





@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public service: Service[] = [
    {
      name: 'Moving & Delivery',
      active: false,
      nameFi: 'Muutto- ja kuljetuspalvelut',
      id: 1
    },
    {
      name: 'Parcel Delivery',
      active: false,
      nameFi: 'Paketin kotiinkuljetus',
      id: 2
    }
  ];
  clickData: any = {
    deliveryType: {},
    vehicle: {},
    category: {}
  };

  public tableData: any = [
    {
      minDistance: 0,
      maxDistance: 3,
      valid: false,
      minCharge: 0,
      maxCharge: 0,
      text: ''
    },
    {
      minDistance: 3,
      maxDistance: 5,
      valid: false,
      minCharge: 0,
      maxCharge: 0,
      text: ''

    },
    {
      minDistance: 5,
      maxDistance: 10,
      valid: false,
      minCharge: 0,
      maxCharge: 0,
      text: ''

    },
    {
      minDistance: 10,
      maxDistance: 20,
      valid: false,
      minCharge: 0,
      maxCharge: 0,
      text: ''

    },
  ];
  listCategories: Categories[] = [];
  listVehicle: Vehicle[] = [];
  listSubCategories: Subcategories[] = [];
  listExtraCharges: ExtraCharges[] = [];
  listCharges: Charges[] = [];
  chooseCategory = false;
  public showTable = false;

  constructor(private api: ApiServiceService, public router: Router, private snackBar: MatSnackBar, public translation: TranslationService) {
  }

  ngOnInit(): void {
    this.categories();
    this.vehicle();
    this.subCategories();
    this.extra();
    this.charges();
    this.testFunction();
  }

  categories(): void {
    this.api.getData().subscribe(data => {
        this.listCategories = data;
      },
      err => {
        console.log('error occurred', err);
      });
  }

  vehicle(): void {
    this.api.fetchData().subscribe(data => {
        this.listVehicle = data;
      },
      err => {
        console.log('', err);
      });
  }

  subCategories(): void {
    this.api.getSubCategories().subscribe(data => {
        this.listSubCategories = data;
        console.log('subCat param', this.listSubCategories);
      },
      error => {
        console.log('list subCategories error', error);
      });
  }

  extra(): void {
    this.api.getExtraCharges().subscribe(data => {
        this.listExtraCharges = data;
        console.log('ExtraCharges', this.listExtraCharges);
      },
      error => {
        console.log('Extra Charge error', error);
      });
  }

  charges(): void {
    this.api.getCharges().subscribe(data => {
        this.listCharges = data;
        console.log('Charges', this.listCharges);
      },
      error => {
        console.log('charges error', error);
      });
  }

  common(obj: any, type: number): void {

    if (type === 1) {
      this.clickData.deliveryType = obj;
      this.showTable = false;
      this.service.forEach((element) => {
        element.active = element.id === obj.id;

        if (element.id === 2 && element.active) {
          this.clickData.deliveryType = obj;
          this.listVehicle.forEach(el => {
            if ( el.name === 'By Foot') {
              this.clickData.vehicle =  el;
              el.active = true;
            } else {
              el.active = false;
            }
          });
        }
        // console.log('btn name', this.service );
      });
    } else if (type === 2) {
      this.clickData.category = obj;
      // console.log('btn2', obj);
      this.listCategories.forEach((element) => {
        element.active = element.id === obj.id;
      });
      this.chooseCategory = true;
    } else {
      if (this.service[1].active) {
        this.listVehicle.forEach((element) => {
          if (!element.active) {
            this.openSnackBar('We are delivering by foot only for parcels', '');
          }
        });
      } else {
        this.clickData.vehicle = obj;
        this.showTable = false;
        // console.log('btn3', obj);

        this.listVehicle.forEach((element) => {
          element.active = element.id === obj.id;
        });
      }

    }
  }

  testFunction(): void {
    for (let i = 0; i <= this.listVehicle.length - 1; i++) {
      console.log('Hello', this.listVehicle[i]);
      this.listVehicle[i].active = false;
    }
    this.listCategories.forEach((item) => {
      item.active = false;
    });
  }

  calculate(): void {
    console.log(' category', Object.keys(this.clickData.category).length === 0);
    console.log(' category', this.clickData.category.id);
    if (Object.keys(this.clickData.category).length === 0 && this.clickData.deliveryType.id === 1) {
      this.openSnackBar(this.translation.getLang() === 'en' ? 'Please select category' : 'Valitse tuoteryhmä', '');
    } else if (Object.keys(this.clickData.vehicle).length === 0 && this.clickData.deliveryType.id === 1) {
      this.openSnackBar(this.translation.getLang() === 'en' ? 'Please select vehicle' : 'Valitse ajoneuvo.', '');
    } else if (Object.keys(this.clickData.deliveryType).length === 0) {
      this.openSnackBar(this.translation.getLang() === 'en' ? 'Please select delivery type' : 'Valitse toimitustyyppi.', '');
    } else {
      const group = _.groupBy(this.listCharges, el => {
        return el.vehicle.name;
      });
      const vehicleCharges = [
        {
          id: '',
          name: 'By Foot',
          min: group['By Foot'][0].charge,
          max: group['By Foot'][group['By Foot'].length - 1].charge
        },
        {
          id: '',
          name: 'Cycle',
          min: group.Cycle[0].charge,
          max: group.Cycle[group.Cycle.length - 1].charge
        },
        {
          id: '',
          name: 'Scooter',
          min: group.Scooter[0].charge,
          max: group.Scooter[group.Scooter.length - 1].charge
        },
        {
          id: '',
          name: 'Car',
          min: group.Car[0].charge,
          max: group.Car[group.Car.length - 1].charge
        },
        {
          id: '',
          name: 'Van',
          min: group.Van[0].charge,
          max: group.Van[group.Van.length - 1].charge
        },
      ];
      vehicleCharges.forEach((el) => {
        if (el.name === this.clickData.vehicle.name) {
          this.clickData.vehicle.min = el.min;
          this.clickData.vehicle.max = el.max;
        }
      });
      console.log('min and max', vehicleCharges);
      this.tableData.forEach((tableItem: any) => {
        // console.log('distance', distance.maxDistance, this.clickData.vehicle.max_distance);
        if (this.clickData.vehicle.max_distance >= tableItem.maxDistance) {
          tableItem.valid = true;
          tableItem.text = 'Valid';
          const calc = this.calculatePrice(tableItem.maxDistance, tableItem.minDistance, this.clickData.vehicle.min_charges);
          tableItem.minCharge = calc.min;
          tableItem.maxCharge = calc.max;
        } else {
          tableItem.valid = false;
          tableItem.text = this.translation.getLang() === 'en' ? 'Distance exceed max value' : 'Etäisyys ylittää maksimiarvon';
          console.log('click data', this.clickData);
        }
      });
      console.log('group', group);
    }

  }

  calculatePrice(maxDistance: number, minDistance: number, minVehicleCharge: number): any {
    this.showTable = false;
    let total = 0;
    let minPrice = 0;
    let maxPrice = 0;
    if (minDistance === 0) {
      minPrice = minPrice + this.clickData.vehicle.min_charges;
      console.log('min price if distance is 0', minPrice, minDistance, minVehicleCharge);
    } else {
      minPrice = this.clickData.vehicle.min * minDistance;
      if (minPrice < this.clickData.vehicle.min_charges) {
        minPrice = this.clickData.vehicle.min_charges;
      } else {

      }
    }
    maxPrice = maxDistance * this.clickData.vehicle.max;
    if (maxPrice > this.clickData.vehicle.max_charges) {
      maxPrice = this.clickData.vehicle.max_charges;
    } else if (maxPrice < this.clickData.vehicle.min_charges) {
      maxPrice = this.clickData.vehicle.min_charges;
    }

    if (this.clickData.deliveryType.id === 2) {
      total = this.listSubCategories[0].charges;
      minPrice = minPrice + total;
      maxPrice = maxPrice + total;
    }
    this.showTable = true;
    console.log('click data', this.clickData);
    console.log('maxprice ' + maxPrice + ' minPrice ' + minPrice, maxPrice === minPrice);
    maxPrice = Math.round((maxPrice * 0.24) + maxPrice);
    minPrice = Math.round((minPrice * 0.24) + minPrice);
    return {max: maxPrice, min: minPrice};
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 600
    });
  }
}
