import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServicioGasolinaService } from './servicios/servicio-gasolina.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServicioGasolinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
