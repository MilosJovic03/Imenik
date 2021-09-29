
class ContactItem {

    id: string;
    name: string;
    number: string;

    constructor(name: any, number: any) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;
    }


    static fromJSON(json: any) {
        let toDoItem = new ContactItem(json.name, json.number);
        toDoItem.id = json.id;

        return toDoItem;
    }
}

export default ContactItem;