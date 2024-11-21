import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { addCustomerData, Customer } from '../..//db/db';


// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './email-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-email')
export class AppEmail extends LitElement {

  @state() private firstName = '';
  @state() private email = '';

  static styles = [
    sharedStyles,
    styles
  ]

  private handleSubmit(event: Event) {
    event.preventDefault();
    const customer: Customer = { email: this.email, firstName: this.firstName, date: new Date().toISOString() };
    addCustomerData(customer);
    this.clearForm();
  }

  private clearForm() {
    this.firstName = '';
    this.email = '';
  }

  private handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    if (name === 'firstName') {
      this.firstName = value;
    } else if (name === 'email') {
      this.email = value;
    }
  }

  render() {
    return html`
    <app-header ?enableBack="${true}"></app-header>
    <div class="container">
        <h1>Mom Beyond Birth</h1>
        <form @submit="${this.handleSubmit}">
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            .value="${this.firstName}"
            @input="${this.handleInput}"
            required
          />

          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            .value="${this.email}"
            @input="${this.handleInput}"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    `;
  }
}
