import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent {

  countries: string[] = [
    'India',
    'Australia',
    'England',
    'West Indies',
    'New Zealand',
    'Pakistan',
  ];

  countryName: string = this.countries[0];

}
