import { Component, OnInit } from '@angular/core';
import { Vouch } from './vouch';
import { VouchService } from './vouch.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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
    this.getVouch();
  }

  toggle(){
    let form = document.getElementById("form")!;
    let button = document.getElementById("buttonToggle")!;
    if (form.style.display === "none") {
      form.style.display = "block";
      button.textContent = "Fermer le formulaire"
    } else {
      form.style.display = "none";
      button.textContent = "Laissez moi un avis !"
    }
  }
  
  public getVouch(): void {
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
  
  public onAddVouch(addForm: NgForm): void {
    document.getElementById('submit-form')!.click();
    addForm.form.value.isVerified = false;
    addForm.form.value.dateReview = new Date().getTime();
    this.vouchService.addVouch(addForm.value).subscribe(
      (response: Vouch) => {
        console.log(response);
        this.getVouch();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
