import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { TransposedDryComponent } from './transposed-dry/transposed-dry.component';
import { MatrixClassComponent } from './matrix-class/matrix-class.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    TransposedDryComponent,
    MatrixClassComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
