import { Component } from '@angular/core';
import { projects } from './projects/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  projects = projects
}