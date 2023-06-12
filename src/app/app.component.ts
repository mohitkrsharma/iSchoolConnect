import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'iSchoolConnectTest';
  countries:any = [];
  disciplines:any = [];
  tuitionfee:any = [];
  partnershipType:any = [];
  ministryOfEducation:any = [];
  countrypanelOpenState = false;
  disciplinepanelOpenState = false;
  constructor(public http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('https://localhost:3000/countries').subscribe((response:any) =>{
      response.forEach((m:any)=> {
        this.countries.push (m);
      });
    })

    this.http.get('https://localhost:3000/discipline').subscribe((response:any) =>{
      response.forEach((m:any)=> {
        this.disciplines.push (m);
      });
    })

    this.http.get('https://localhost:3000/tuition-fees').subscribe((response:any) =>{
      response.forEach((m:any)=> {
        this.tuitionfee.push (m);
      });
    })

    this.http.get('https://localhost:3000/partnership-type').subscribe((response:any) =>{
      response.forEach((m:any)=> {
        this.partnershipType.push (m);
      });
    })

    this.http.get('https://localhost:3000/education').subscribe((response:any) =>{
      response.forEach((m:any)=> {
        this.ministryOfEducation.push (m);
      });
    })
  }
}
