import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

interface Nationality {
  value: string;
  viewValue: string;
}

interface UserType {
  value: string;
  viewValue: string;
}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})

export class TypographyComponent implements OnInit {
  
  AddForm: FormGroup ;
  Completed = false;
  isLinear = true;
  intFormType : number = 1;
  isdisable : boolean = false;
  loading : boolean = false;
  IsFormValid: boolean = true;
  isSubmitted = false;
  minDate: Date;
  maxDate: Date;
  matcher = new MyErrorStateMatcher();


  constructor() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 30, 0, 1);
    this.maxDate = new Date(currentYear - 16, 11, 31);
    this.maxDate = new Date();

  }
  
  nations: Nationality[] = [
    {value: 'eg', viewValue: 'Egypt'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'KSA', viewValue: 'Saudi Arabia'}
  ];
  Users: UserType[] = [
    {value: 'specker', viewValue: 'Speaker'},
    {value: 'Event-Planner', viewValue: 'Event Planner'},
    {value: 'Founder', viewValue: 'Founder'}
  ];
  ngOnInit() {
  }
CheckData(){
  
}
}
