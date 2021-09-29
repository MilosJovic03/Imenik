import { Injectable } from '@angular/core';
import ContactList from '../model/contactList';
import ContactItem from '../model/contactItem';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: ContactList;

  constructor() {
    this.contactList = new ContactList;
  }


  addItem(name: any, number: any) {
    let contact = new ContactItem(name, number);
    this.contactList.add(contact);
  }


  deleteItem(contact: any) {
    this.contactList.delete(contact);
  }


 

}
