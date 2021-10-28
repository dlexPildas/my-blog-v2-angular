import { Component, Input, OnInit } from '@angular/core';
import { SideProjectModel } from '../../models/side-project.model';

@Component({
  selector: 'app-card-side-project',
  templateUrl: './card-side-project.component.html',
  styleUrls: ['./card-side-project.component.css']
})
export class CardSideProjectComponent implements OnInit {
  @Input() projectSide!: SideProjectModel;

  constructor() { }

  ngOnInit(): void {
  }

}
