import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private  http: HttpClient) { }



  getData(): Observable <any>{
    return this.http.get('https://api.easyshifters.com/categories');
  }
  fetchData(): Observable<any>{
    return this.http.get('https://api.easyshifters.com/vehicles');
  }
  getSubCategories(): Observable<any>{
    return this.http.get('https://api.easyshifters.com/subcategories?type=parcel');
  }
  getExtraCharges(): Observable<any>{
    return this.http.get('https://api.easyshifters.com/extracharges');
  }
  getCharges(): Observable<any>{
    return this.http.get('https://api.easyshifters.com/charges?_sort=charge:ASC');
  }
}
