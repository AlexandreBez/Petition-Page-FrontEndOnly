import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingsModule } from './AppRouting.modules';
import { changeName } from './changeName.pipe';
import { HomeComponent } from './home/home.component';
import { PetitionFormComponent } from './petition-form/petition-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetitionFormComponent,
    changeName
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
