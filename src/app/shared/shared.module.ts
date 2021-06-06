import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SharedRoutingModule } from '@shared/shared-routing.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    SharedRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    PageNotFoundComponent,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
