import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { DeletebooksComponent } from './deletebooks/deletebooks.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    DeletebooksComponent,
    SearchbooksComponent,
    ViewbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
