import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { CardSideProjectComponent } from './components/card-side-project/card-side-project.component';


@NgModule({
  declarations: [
    AboutComponent,
    TimeLineComponent,
    CardSideProjectComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
