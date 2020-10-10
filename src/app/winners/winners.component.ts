import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {
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
