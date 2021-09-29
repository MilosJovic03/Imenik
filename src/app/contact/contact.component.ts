import { Component, OnInit, Input } from '@angular/core';
import ContactItem from '../model/contactItem';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: ContactItem = new ContactItem(null, null);

  constructor(public contactService: ContactService) { 

  }

  ngOnInit(): void {
  }

}
