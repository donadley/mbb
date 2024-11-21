// src/components/CustomerList.ts
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getAllCustomers, Customer } from '../../db/db';

@customElement('app-customer')
export class CustomerList extends LitElement {
  @state() private customers: Customer[] = [];

  static styles = css`
    .customer-list {
      max-width: 600px;
      margin: 0 auto;
      padding: 1em;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .customer-item {
      padding: 0.5em;
      border-bottom: 1px solid #ddd;
      color: black;
    }
    .customer-item:last-child {
      border-bottom: none;
    }
    h2 {
      text-align: center;
      color: #333;
    }
  `;

  // Fetch customers from IndexedDB when component is first updated
  async firstUpdated() {
    this.customers = await getAllCustomers();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <div class="customer-list">
        <h2>All Customers</h2>
        ${this.customers.length > 0
          ? html`
              ${this.customers.map(
                (customer) => html`
                  <div class="customer-item">
                    <p><strong>First Name:</strong> ${customer.firstName}</p>
                    <p><strong>Email:</strong> ${customer.email}</p>
                    <p><strong>Date:</strong> ${customer.date}</p>
                  </div>
                `
              )}
            `
          : html`<p>No customers found.</p>`}
      </div>
    `;
  }
}