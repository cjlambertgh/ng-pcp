import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PcpCalcComponent } from './pcp-calc/pcp-calc.component';
import { PcpResultComponent } from './pcp-result/pcp-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaBannerComponent } from './ga-banner/ga-banner.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PcpCalcComponent,
    PcpResultComponent,
    GaBannerComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
