import { Component, OnInit } from '@angular/core';
import { ListMpfService } from '../list-mpf.service';

@Component({
  selector: 'app-list-mpf',
  templateUrl: './list-mpf.component.html',
  styleUrls: ['./list-mpf.component.css'],
  providers: [ListMpfService]
})
export class ListMpfComponent implements OnInit {
  mpfDetails; 

  constructor(listMpfService: ListMpfService) { 
    this.mpfDetails = listMpfService.getDetails();
    console.log(listMpfService);
    console.log(this.mpfDetails);

  }

  ngOnInit() {
    
  }

}
