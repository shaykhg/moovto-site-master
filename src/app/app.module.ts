import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {BecomeRiderComponent} from './become-rider/become-rider.component';
import {ParcelDeliveryComponent} from './parcel-delivery/parcel-delivery.component';
import {ParcelReturnComponent} from './parcel-return/parcel-return.component';
import {MovingDeliveryComponent} from './moving-delivery/moving-delivery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import {LanguagePipe} from './pipe/language-pipe';
import {HttpClientModule} from '@angular/common/http';
import {TermsConditionsComponent} from './terms-conditions/terms-conditions.component';
import {PolicyComponent} from './policy/policy.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PricingComponent } from './pricing/pricing.component';
import {MatTableModule} from '@angular/material/table';
import {TranslationService} from './service/translation.service';
import { TypeFormDialogComponent } from './type-form-dialog/type-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BecomeRiderComponent,
    ParcelDeliveryComponent,
    ParcelReturnComponent,
    MovingDeliveryComponent,
    LanguagePipe,
    TermsConditionsComponent,
    PolicyComponent,
    PricingComponent,
    TypeFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    IvyCarouselModule,
    CarouselModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule
  ], exports: [LanguagePipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
