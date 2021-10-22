import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
   


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

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
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
  selected: Date | null;


  constructor(fb : FormBuilder) { 
this.AddForm = fb.group({
  Username: ['', Validators.required],
  Email:['',[Validators.required, Validators.email]],
  FirstName:['', Validators.required],
  LastName:['', Validators.required],
  Address:['', Validators.required],
  IsVip:['', Validators.required ],
  Nationality: ['', Validators.required ],
  FromUniversity: ['', Validators.required ],
  UserType: ['', Validators.required ],
  StartDate: ['', Validators.required ],
  EndDate: ['', Validators.required ],
  College: ['', Validators.required ],
})

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
