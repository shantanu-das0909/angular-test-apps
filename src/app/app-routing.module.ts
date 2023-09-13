import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const routes: Routes = [
  {path: 'dropdown-menu', component: DropdownMenuComponent},
  {path: 'search-bar', component: SearchBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
