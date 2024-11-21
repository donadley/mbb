import{r as d,x as o,i as l,a as n,t as u}from"./index-CY3Q9nK5.js";import{g}from"./db-lsGyomYS.js";var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,c=(t,s,p,e)=>{for(var r=e>1?void 0:e?f(s,p):s,m=t.length-1,i;m>=0;m--)(i=t[m])&&(r=(e?i(s,p,r):i(r))||r);return e&&r&&h(s,p,r),r};let a=class extends d{constructor(){super(...arguments),this.customers=[]}async firstUpdated(){this.customers=await g()}render(){return o`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="customer-list">
        <h2>All Customers</h2>
        ${this.customers.length>0?o`
              ${this.customers.map(t=>o`
                  <div class="customer-item">
                    <p><strong>First Name:</strong> ${t.firstName}</p>
                    <p><strong>Email:</strong> ${t.email}</p>
                    <p><strong>Date:</strong> ${t.date}</p>
                  </div>
                `)}
            `:o`<p>No customers found.</p>`}
      </div>
    `}};a.styles=l`
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
  `;c([n()],a.prototype,"customers",2);a=c([u("app-customer")],a);export{a as CustomerList};
//# sourceMappingURL=app-customer-BRHg0-rm.js.map
