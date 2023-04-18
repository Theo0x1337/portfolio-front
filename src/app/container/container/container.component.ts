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
      name: 'Home',
      isSelected: true
    },
    {
      name: 'About',
      isSelected: false
    },
    {
      name: 'Stack',
      isSelected: false
    },
    {
      name: 'Projects',
      isSelected: false
    },
    {
      name: 'Vouch',
      isSelected: false
    }
];

  constructor(){
    this.route = 'Home';
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
