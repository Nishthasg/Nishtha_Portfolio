import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  openPension(){
    window.open('https://ifms.rajasthan.gov.in/#/home','_blank');
  }
  openFood(){
   window.open('https://food-app-767c.onrender.com/', '_blank');
  }
}
