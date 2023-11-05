import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  location;
  head;
  cities: City[] = [
    // {value: 'Select City', viewValue: 'Select City'},
    {value: 'Aurangabad', viewValue: 'Aurangabad'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'}
  ];
  constructor(public router : Router) {
   }

   selectLocation() {
     localStorage.setItem('location', this.location);
     if (localStorage.getItem('location') === "undefined") {
       window.alert('please select location')
       return
     }
     this.router.navigate(['/home']);
   }
  ngOnInit(): void {
    if(localStorage.getItem('IsLoggedIn') === null || localStorage.getItem('IsLoggedIn') === undefined){
      this.head = 'Login'
    }else{
      this.head = localStorage.getItem('nickname')
    }
  }

  SelectOption(location) {
    console.log(location);
    this.location = location;

  }

  clickedHead(){
    if(this.head === 'Login'){
      this.router.navigate(['/login'])
    } else if(this.head === localStorage.getItem('nickname')){
      this.router.navigate(['/profile'])
    }
  }

}
