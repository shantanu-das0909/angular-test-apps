import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-learn',
  templateUrl: './directives-learn.component.html',
  styleUrls: ['./directives-learn.component.css'],
})
export class DirectivesLearnComponent {
  users: string[] = [];

  constructor() {
    this.users = ['John', 'Bill', 'May', 'Ron'];
  }
}
