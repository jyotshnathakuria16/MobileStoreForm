import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';
import{ ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormControl, Validators} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TitleCasePipe } from '@angular/common';
import {MyUppercasePipe}  from './form/myuppercase.component';




@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAVHlriax2aRTIFQNM-UpuJgszKp40-KGg",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, FormComponent, MyUppercasePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
