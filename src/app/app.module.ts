import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap'; 
import { AppComponent } from './app.component';
import { CompareFeeComponent } from './compare-fee/compare-fee.component';
import { ListMpfComponent } from './list-mpf/list-mpf.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareFeeComponent,
    ListMpfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
