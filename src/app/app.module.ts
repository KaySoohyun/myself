import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NotebookComponent } from './notebook/notebook.component';
import { TermComponent } from './term/term.component';
import { InitComponent } from './init/init.component';
import { LetterComponent } from './letter/letter.component';
import { MenuComponent } from './menu/menu.component';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotebookComponent,
    TermComponent,
    InitComponent,
    LetterComponent,
    MenuComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
