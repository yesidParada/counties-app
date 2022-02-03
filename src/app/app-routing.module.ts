import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WiewCountriesComponent } from "./countries/pages/wiew-countries/wiew-countries.component";
import { WithCapitalComponent } from "./countries/pages/with-capital/with-capital.component";
import { WithCountrieComponent } from "./countries/pages/with-countrie/with-countrie.component";
import { WithRegionComponent } from "./countries/pages/with-region/with-region.component";

const routes: Routes = [{
    path: '',
    component: WithCountrieComponent,
    pathMatch: 'full'
  },{
    path: 'region',
    component: WithRegionComponent
  },{
    path: 'capital',
    component: WithCapitalComponent
  },{
    path: 'country/:id',
    component: WiewCountriesComponent
  },{
    path: '**',
    redirectTo: ''
  }];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {}