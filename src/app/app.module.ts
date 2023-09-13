import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DirectivesLearnComponent } from './components/directives-learn/directives-learn.component';
import { HoverDirective } from './components/directives-learn/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    SearchBarComponent,
    DirectivesLearnComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
