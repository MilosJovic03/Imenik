import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  insertNumber: any;

  constructor(public contactsService: ContactService) { }


  ngOnInit(): void {
  }

  checkNumber() {
    if (isNaN(this.insertNumber) && this.insertNumber != null && this.insertNumber != undefined) {
      return true;
    } else {
      return false;
    }
  }
    
   

}
