import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../../person';
 import jsPDF from 'jspdf';   
 import html2canvas from 'html2canvas';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  persons: Person[] = [];
 
  constructor(public personService: PersonService) { }


  ngOnInit(): void {
    this.personService.all().subscribe((data: Person[])=>{
      this.persons = data;
      console.log(this.persons);
    })
  
}  
   
}