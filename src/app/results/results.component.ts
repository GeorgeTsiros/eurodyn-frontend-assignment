import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/services/helper.service';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  dataSource = null;
  displayedColumns: string[] = ['firstname', 'lastname', 'rank'];

  constructor(private helperService: HelperService, private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit(): void {
    // console.log(this.http.get("http://ergast.com/api/f1/2005/10/results.json"));
    // this.http.get('http://ergast.com/api/f1/2010/drivers.json')
    //          .subscribe((res) =>{
    //         this.dataSource = res.MRData.DriverTable.Drivers[1].driverId;
    //            console.log(this.dataSource);
    
    this.helperService.getResults().subscribe(
      (response) => {
        // console.log(response);
        this.dataSource = response;
        const obj = JSON.stringify(this.dataSource);
        console.log("OBJECT " , response);
      },
      (error) => {
        console.log("Results Error: ", error);
      },
    )
  }
}
