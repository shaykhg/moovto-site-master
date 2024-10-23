import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ParcelReturnComponent} from './parcel-return/parcel-return.component';
import {MovingDeliveryComponent} from './moving-delivery/moving-delivery.component';
import {BecomeRiderComponent} from './become-rider/become-rider.component';
import {ParcelDeliveryComponent} from './parcel-delivery/parcel-delivery.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PolicyComponent } from './policy/policy.component';
import {PricingComponent} from './pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'parcel-return',
    component: ParcelReturnComponent
  },
  {
    path: 'moving-delivery',
    component: MovingDeliveryComponent
  },
  {
    path: 'become-rider',
    component: BecomeRiderComponent
  },
  {
    path: 'parcel-delivery',
    component: ParcelDeliveryComponent
  },
  {
    path: 'terms_conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
