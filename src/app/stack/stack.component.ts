import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  stacks = [
    {
      name: "Javascript",
      type: "primary"
    },
    {
      name: "Typescript",
      type: "primary"
    },
    {
      name: "HTML",
      type: "primary"
    },
    {
      name: "CSS",
      type: "primary"
    },
    {
      name: "Java",
      type: "primary"
    },
    {
      name: "Python",
      type: "primary"
    },
    {
      name: "Solidity",
      type: "primary"
    },
    {
      name: "React",
      type: "primary"
    },
    {
      name: "NextJS",
      type: "primary"
    },
    {
      name: "NestJS",
      type: "primary"
    },
    {
      name: "Angular",
      type: "primary"
    },
    {
      name: "Springboot",
      type: "primary"
    },
    {
      name: "Tailwind",
      type: "primary"
    },
    {
      name: "MySql",
      type: "accent"
    },
    {
      name: "MongoDB",
      type: "accent"
    },
    {
      name: "Oracle",
      type: "accent"
    },
    {
      name: "Redis",
      type: "accent"
    },
    {
      name: "VS Code",
      type: "warn"
    },
    {
      name: "Intellij",
      type: "warn"
    },
    {
      name: "Docker",
      type: "warn"
    },
  ]

  shuffleArray(array: any) {
    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }
 
   return array;
 }

  ngOnInit(){
    this.stacks = this.shuffleArray(this.stacks);
  }
}
