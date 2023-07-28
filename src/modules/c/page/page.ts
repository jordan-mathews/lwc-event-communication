import { LightningElement, track } from 'lwc';

interface IContact {
  name: string;
  email: string;
}

export default class Page extends LightningElement {
  @track contacts: IContact[] = [{ name: 'Jordan', email: 'jordan@jordan.no' }];

  handleSignup(e) {
    const contact = e.detail;
    this.contacts.push(contact);
  }
}
