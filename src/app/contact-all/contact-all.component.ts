import { Component, OnInit } from '@angular/core';
import {ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-all',
  templateUrl: './contact-all.component.html',
  styleUrls: ['./contact-all.component.css']
})
export class ContactAllComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }

}