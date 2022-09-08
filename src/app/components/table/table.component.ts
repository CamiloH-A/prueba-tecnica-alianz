import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  filterClients = '';
  clients = [
    {
      "SharedKey": "jgutierrez",
      "BussinesID": "Juliana Gutierrez",
      "Email": "jgutierrez@gmail.com",
      "Phone": "3127460234",
      "date": "02/04/2019"
    },
    {
      "SharedKey": "mmartinez",
      "BussinesID": "Manuel Martinez",
      "Email": "mmartinez@gmail.com",
      "Phone": "3127460234",
      "date": "11/04/2019"
    },
    {
      "SharedKey": "aruiz",
      "BussinesID": "Ana Ruiz",
      "Email": "aruiz@gmail.com",
      "Phone": "3127460234",
      "date": "30/01/2019"
    },
    {
      "SharedKey": "tramos",
      "BussinesID": "Tania Ramos",
      "Email": "tramos@gmail.com",
      "Phone": "3127460234",
      "date": "30/05/2019"
    },
    {
      "SharedKey": "cariza",
      "BussinesID": "Carlos Ariza",
      "Email": "cariza@gmail.com",
      "Phone": "3127460234",
      "date": "30/04/2019"
    }
  ];

  ngOnInit(): void {
  }

}
