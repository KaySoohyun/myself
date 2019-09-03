import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DoingComponent } from './doing/doing.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';

@NgModule({
  declarations: [
    LandingComponent, 
    HeroComponent, 
    AboutComponent, 
    ContactComponent, 
    FooterComponent, 
    HobbiesComponent, 
    DoingComponent, 
    SkillsComponent, 
    StudiesComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
