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
    button {
      display: block;
      margin: 1em auto;
      padding: 0.5em 1em;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  // Fetch customers from IndexedDB when component is first updated
  async firstUpdated() {
    this.customers = await getAllCustomers();
  }

  // Method to download CSV file
  private downloadCSV() {
    if (!this.customers.length) {
      alert('No customer data available to download.');
      return;
    }

    const headers = ['First Name', 'Email', 'Date'];
    const rows = this.customers.map((customer) => [
      customer.firstName,
      customer.email,
      customer.date,
    ]);

    // Convert to CSV string
    const csvContent =
      [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');

    // Create a Blob and a link to download it
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'customers.csv';
    link.click();
    URL.revokeObjectURL(url); // Cleanup the URL object
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
        <button @click="${this.downloadCSV}">Download CSV</button>
      </div>
    `;
  }
}
