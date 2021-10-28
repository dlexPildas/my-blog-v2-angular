import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from '../../models/job.model';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  @Input() jobs!: JobModel[];


  constructor() { }

  ngOnInit(): void {
  }

}
