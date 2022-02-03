import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country.model';
import { CountryService } from 'src/app/countries/services/country.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: []
})
export class SearchCountryComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public searchType: string = '';
  public valueSearch: string = '';
  public visibleError: boolean = false;
  public countriesList: Country[] = [];
  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
  }

  public search(): void {
    this.visibleError = false;
    this._countryService.searchCountry(this.searchType ,this.valueSearch).subscribe((countries: Country[]) => {
      this.countriesList = countries;
      console.log(this.countriesList);
    },(error) => {
      if (error) {
        this.visibleError = true;
        this.countriesList = [];
      }
    });
  }

}
