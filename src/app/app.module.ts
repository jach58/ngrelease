import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReleaseService } from './services/release.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routes';
import { ReleaseComponent } from './components/release/release.component';
import { ReleaseCreateComponent } from './components/release-create/release-create.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ReleaseComponent,
    ReleaseCreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
