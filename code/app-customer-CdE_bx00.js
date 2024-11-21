import{r as d,x as c,i as m,a as p,t as u}from"./index-xHyQqOaH.js";import{g as b}from"./db-lsGyomYS.js";var h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,l=(e,r,n,s)=>{for(var t=s>1?void 0:s?g(r,n):r,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(s?o(r,n,t):o(t))||t);return s&&t&&h(r,n,t),t};let i=class extends d{constructor(){super(...arguments),this.customers=[]}async firstUpdated(){this.customers=await b()}downloadCSV(){if(!this.customers.length){alert("No customer data available to download.");return}const e=["First Name","Email","Date"],r=this.customers.map(o=>[o.firstName,o.email,o.date]),n=[e.join(","),...r.map(o=>o.join(","))].join(`
`),s=new Blob([n],{type:"text/csv;charset=utf-8;"}),t=document.createElement("a"),a=URL.createObjectURL(s);t.href=a,t.download="customers.csv",t.click(),URL.revokeObjectURL(a)}render(){return c`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="customer-list">
        <h2>All Customers</h2>
        ${this.customers.length>0?c`
              ${this.customers.map(e=>c`
                  <div class="customer-item">
                    <p><strong>First Name:</strong> ${e.firstName}</p>
                    <p><strong>Email:</strong> ${e.email}</p>
                    <p><strong>Date:</strong> ${e.date}</p>
                  </div>
                `)}
            `:c`<p>No customers found.</p>`}
        <button @click="${this.downloadCSV}">Download CSV</button>
      </div>
    `}};i.styles=m`
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
  `;l([p()],i.prototype,"customers",2);i=l([u("app-customer")],i);export{i as CustomerList};
//# sourceMappingURL=app-customer-CdE_bx00.js.map
