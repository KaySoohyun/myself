import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { NotebookModule } from './notebook/notebook.module';
import { TermModule } from './term/term.module';
import { InitComponent } from './init/init.component';
import { LetterComponent } from './letter/letter.component';
import { MenuComponent } from './menu/menu.component';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    LetterComponent,
    MenuComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    NotebookModule,
    TermModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
