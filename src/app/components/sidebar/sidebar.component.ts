import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  formClient = new FormControl('');

  opcionesMenu: string[] = ['Clients', 'Clients look history', 'Emergency PIN configuration', 'Emergency PIN history'];

  constructor() { }

  ngOnInit(): void {
  }

}
