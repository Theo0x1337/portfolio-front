import { Component, OnInit } from '@angular/core';
import { Vouch } from './vouch';
import { VouchService } from './vouch.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vouch',
  templateUrl: './vouch.component.html',
  styleUrls: ['./vouch.component.css']
})
export class VouchComponent implements OnInit{
  public vouchs: Vouch[];

  constructor(private vouchService: VouchService){
    this.vouchs = [];
  }

  ngOnInit(){
    this.getEmployees();
  }

  toggle(){
    let form = document.getElementById("form")!;
    let button = document.getElementById("buttonToggle")!;
    if (form.style.display === "none") {
      form.style.display = "block";
      button.textContent = "Close form"
    } else {
      form.style.display = "none";
      button.textContent = "Leave me a review !"
    }
  }
  
  public getEmployees(): void {
    this.vouchService.getVouch().subscribe(
      (response: Vouch[]) => {
        this.vouchs = response;
        console.log(this.vouchs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
