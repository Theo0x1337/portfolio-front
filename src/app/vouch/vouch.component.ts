import { Component, OnInit } from '@angular/core';
import { Vouch } from './vouch';
import { VouchService } from './vouch.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

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
      button.textContent = "Ecrire un avis"
    }
  }
  
  public getVouch(): void {
    this.vouchService.getVouch().subscribe(
      (response: Vouch[]) => {
        this.vouchs = response;
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
        this.getVouch();
        Swal.fire(
          'Votre avis à été soumis !',
          'Merci !',
          'success'
        )
        Swal.fire({
          title: 'Votre avis à été soumis !',
          text: "Merci !",
          icon: 'success',
          confirmButtonColor: '#c026d3',
          confirmButtonText: 'Ok'
        })
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
