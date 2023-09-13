import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  isSearching: boolean = false;
  showProducts: boolean = false;
  filteredProducts: string[] = [];
  products: string[] = [];

  @ViewChild('productSearchInput', { static: true }) productInput: ElementRef =
    {} as ElementRef;

  ngOnInit(): void {
    this.productSerach();
    this.products = [
      'headphone',
      'bags',
      'bottles',
      'mobiles',
      'mangoes',
      'shoes',
      'furnitures',
      'headphone set'
    ];
  }

  productSerach() {
    const serach = fromEvent(this.productInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => (this.isSearching = true)),
      switchMap((term) =>
        term ? this.getProducts(term) : of<any>(this.products)
      ),
      tap(() => {
        this.isSearching = false;
        this.showProducts = true;
      })
    );

    serach.subscribe((data) => {
      this.isSearching = false;
      this.filteredProducts = data;
      console.log(data);
      console.log(`isSeraching: ${this.isSearching}`);
      console.log(`showProducts: ${this.showProducts}`);
    });
  }

  getProducts(productName: string) {
    let filteredProducts: string[] = this.filterProducts(productName);
    return of<any>(filteredProducts);
  }

  filterProducts(name: string) {
    return this.products.filter((product) => product.includes(name));
  }

  setProductName(productName: string) {
    console.log(productName);
    this.productInput.nativeElement.value = productName;
    this.showProducts = false;
  }

  onFocus(productName: string) {
    this.filteredProducts = this.filterProducts(productName);
    this.showProducts = true;
  }

  onBlur() {
    setTimeout(() => {
      this.showProducts = false;
    }, 100);
  }

}
