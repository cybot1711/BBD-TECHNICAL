import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonComponent } from './button/button.component';
import { AccountFieldComponent } from './account-field/account-field.component';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ButtonComponent,
    AccountFieldComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
