import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{

  @Input()
  public route: string;

  menuList = [
    {
      name: 'Accueil',
      isSelected: true
    },
    {
      name: 'A propos',
      isSelected: false
    },
    {
      name: 'Stack',
      isSelected: false
    }, 
    {
      name: 'Avis',
      isSelected: false
    }
];

  constructor(){
    this.route = 'Accueil';
  }

  ngOnInit() {
  }

  changeColor(menuItem: any){
    // toggle off all selected menu items
    this.menuList.forEach(item => {
        if(item.isSelected){
            item.isSelected = false;
        }
    });
    // select clicked menu item
    menuItem.isSelected = true;
    this.route = menuItem.name;
}
}
