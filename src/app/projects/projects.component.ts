import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.route.paramMap
      .subscribe(params => {
        this.project = projects.find( project => {
          let paramId: string = params.get('id') || ''
          return project.id === parseInt(paramId)
        })
      })
  }
}
