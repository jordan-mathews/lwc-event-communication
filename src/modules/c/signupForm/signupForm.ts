import { LightningElement } from 'lwc';

export default class SignupForm extends LightningElement {
  fields = { name: null, email: null };

  handleSubmit() {
    const signupEvent = new CustomEvent('signup', {
      detail: { ...this.fields }
    });
    this.dispatchEvent(signupEvent);
    this.handleReset();
  }

  handleReset() {
    this.template.querySelector('form')?.reset();
    this.fields = { name: null, email: null };
  }

  handleInputChange(e) {
    this.fields[e.target.name] = e.target.value;
  }

  get name() {
    return this.fields?.name;
  }

  get email() {
    return this.fields?.email;
  }
}
