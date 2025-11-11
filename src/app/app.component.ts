import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,SkillsComponent, EducationComponent, ProjectsComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor( private viewportScroller:ViewportScroller){}
  downloadResume(){
    window.open('Nishtha_Singh_Resume.pdf','_blank');
  }
  contact(){
    this.viewportScroller.scrollToAnchor('footer');
  }
}
