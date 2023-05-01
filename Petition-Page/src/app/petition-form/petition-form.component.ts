import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-petition-form',
  templateUrl: './petition-form.component.html',
  styleUrls: ['./petition-form.component.css']
})
export class PetitionFormComponent{

  constructor(
    private router: Router
  ){}

  // View the form on the HTML
  @ViewChild('form')
  signUpForm!: NgForm;

  // Show data if true
  showData = false;

  //count the amount of signup forms
  counter = new Observable((subscriber) => {
    subscriber.next("Success");
    subscriber.complete();
  });

  amount: number = 0;

  // form formated
  petitionForm = {
    firstName: '',
    lastName: '',
    email: '',
    terms: false
  };

  onCancel(){
    this.router.navigate(['/']);
  }

  onSubmit(){

    this.petitionForm.firstName = this.signUpForm.value.petitionData.firstName;
    this.petitionForm.lastName = this.signUpForm.value.lastName;
    this.petitionForm.email = this.signUpForm.value.email;
    this.petitionForm.terms = this.signUpForm.value.terms;

    this.showData = true;

    this.counter.subscribe(
      {
        next(x) {
          alert(x);
        },
        error(err) {
          alert('something wrong occurred: ' + err);
        },
        complete() {
          console.log('done');
        },
      }
    );

    this.amount += 1;

    this.signUpForm.reset();
  }
}
