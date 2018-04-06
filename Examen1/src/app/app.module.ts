import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { Char1Component } from './char1/char1.component';
import { Char2Component } from './char2/char2.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CountriesServiceService } from './services/countries-service.service';
import { PopulationMexico32Service } from './services/population-mexico-32.service';

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    Char1Component,
    Char2Component
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [CountriesServiceService,PopulationMexico32Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
