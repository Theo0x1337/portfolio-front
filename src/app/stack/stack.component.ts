import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {

  languageList = [
    {
      name: "Javascript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      name: "Typescript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
    },
    {
      name: "HTML",
      image:"https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
      name: "CSS",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
      name: "Java",
      image:"https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/550px-Java_Logo.svg.png",
    },
    {
      name: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
      name: "Solidity",
      image: "https://solidity-fr.readthedocs.io/fr/latest/_images/logo.svg",
    },
  ]

  frameworkList = [
    {
      name: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "NextJS",
      image: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
    },
    {
      name: "NestJS",
      image: "https://docs.nestjs.com/assets/logo-small.svg"
    },
    {
      name: "Angular",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
    },
    {
      name: "Springboot",
      image: "https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png"
    },
    {
      name: "Tailwind",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
    }
  ]

  databaseList = [
    {
      name: "MySql",
      image: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png"
    },
    {
      name: "MongoDB",
      image: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
    },
    {
      name: "Oracle",
      image: "https://logo-marque.com/wp-content/uploads/2020/09/Oracle-Logo.png"
    },
    {
      name: "Redis",
      image: "https://upload.wikimedia.org/wikipedia/fr/6/6b/Redis_Logo.svg"
    },
  ]

  toolsList = [
    {
      name: "Visual Studio Code",
      image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
    },
    {
      name: "Intellij",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png"
    },
  ]

}
