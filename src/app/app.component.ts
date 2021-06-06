import { initialState } from './store/app.reducer';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'junior-forever';


  effectMenuIsActive$: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
