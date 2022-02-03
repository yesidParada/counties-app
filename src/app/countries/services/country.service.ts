import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _apiUrl: string = `https://restcountries.com/v3.1`;
  constructor(private _http: HttpClient) { }


  public searchCountry(searchType: string,search: string): Observable<Country[]> {
    const url = `${this._apiUrl}/${searchType}/${search}`;
    return this._http.get<Country[]>(url);
  }
}
