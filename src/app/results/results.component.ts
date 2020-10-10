import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  dataSource = null;
  displayedColumns: string[] = ['firstname', 'lastname', 'rank'];

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.getResults().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => {
        console.log("Admin Error: ", error);
      },
    )
  }
}
