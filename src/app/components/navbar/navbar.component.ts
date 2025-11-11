import { NgIf, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 isScrolled=false;
 isSidebarOpen = false;
 constructor(private viewportScroller: ViewportScroller) {}
  @HostListener('window:scroll', [])
   onWindowScroll() {
    if (window.innerWidth > 768) {
      this.isScrolled = window.scrollY > 50;
    } else {
      this.isScrolled = false;
    }
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
}
