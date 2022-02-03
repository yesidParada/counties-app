import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCapitalComponent } from './pages/with-capital/with-capital.component';
import { WithCountrieComponent } from './pages/with-countrie/with-countrie.component';
import { WithRegionComponent } from './pages/with-region/with-region.component';
import { WiewCountriesComponent } from './pages/wiew-countries/wiew-countries.component';
import { RouterModule } from '@angular/router';
import { SearchCountryComponent } from '../components/search-country/search-country.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WithCapitalComponent,
    WithCountrieComponent,
    WithRegionComponent,
    WiewCountriesComponent,
    SearchCountryComponent
  ],
  exports: [
    WithCapitalComponent,
    WithCountrieComponent,
    WithRegionComponent,
    WiewCountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CountriesModule { }
