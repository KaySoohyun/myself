import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotebookRoutingModule } from './notebook-routing.module';
import { NotebookComponent } from './notebook.component';
import { MeComponent } from './me/me.component';
import { StudiesComponent } from './studies/studies.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [NotebookComponent, MeComponent, StudiesComponent, SkillsComponent, ProjectsComponent, HobbiesComponent, MoreComponent],
  imports: [
    CommonModule,
    NotebookRoutingModule
  ]
})
export class NotebookModule { }
