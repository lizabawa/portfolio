import { Component, OnInit } from '@angular/core';
import { projects } from './projects/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projects = projects

  isCollapsed = true;
  

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed)
  }

  ngOnInit(): void {
      
  }
}
