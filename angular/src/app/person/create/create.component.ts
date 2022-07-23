import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  logoFile: any;
 base64ImageString: string = '';
  form: FormGroup;

  constructor(
    public personService: PersonService,
    private router: Router,
    private http:HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

  }



 
}
