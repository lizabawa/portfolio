import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing-module';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { TaglineComponent } from './tagline/tagline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SkillsComponent,
    HomeComponent,
    TaglineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
