import ContactItem from "./contactItem";

class ContactList {

    contacts:any;

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact: any) {
        this.contacts.push(contact);
        this.saveToLocalStorage();
    }

    delete(contact: any) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();
    }

    /**changeState(contact: any) {
        item.completed = !item.completed;
        this.saveToLocalStorage();
    }**/

    saveToLocalStorage() {
        localStorage.setItem('contact-list', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('contact-list');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            /*if (key === "date") {
                value = new Date(value);
            }*/
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let toDoItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            toDoItems.push(ContactItem.fromJSON(jsonParsed[i]));
        }

        return toDoItems;

    }

}


export default ContactList;