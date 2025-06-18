import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Import standalone AppComponent here
  ],
  bootstrap: [AppComponent] // Required for single-spa-angular
})
export class AppModule {}