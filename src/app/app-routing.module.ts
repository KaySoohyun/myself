import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotebookComponent } from './notebook/notebook.component';
import { TermComponent } from './term/term.component';
import { InitComponent } from './init/init.component';
import { LetterComponent } from './letter/letter.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'notebook', component: NotebookComponent },
  { path: 'term', component: TermComponent },
  { path: 'letter', component: LetterComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
