import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name:"TheMuseum",
      description:"Nft marketplace built on Avalanche blockchain.",
      stack:"",
    }
  ]
}
