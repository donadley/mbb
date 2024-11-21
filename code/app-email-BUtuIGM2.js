import{i as p,r as d,x as u,s as f,a as m,t as c}from"./index-CY3Q9nK5.js";import{a as h}from"./db-lsGyomYS.js";const b=p`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  body, html {
    height: 100%;
    background: linear-gradient(135deg, #f0f4f8, #dce3f0);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    text-align: left;
    color: #555;
    font-size: 0.9rem;
  }

  input[type="email"], input[type="text"] {
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
`;var x=Object.defineProperty,g=Object.getOwnPropertyDescriptor,l=(i,e,a,t)=>{for(var r=t>1?void 0:t?g(e,a):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(t?o(e,a,r):o(r))||r);return t&&r&&x(e,a,r),r};let s=class extends d{constructor(){super(...arguments),this.firstName="",this.email=""}handleSubmit(i){i.preventDefault();const e={email:this.email,firstName:this.firstName,date:new Date().toISOString()};h(e),this.clearForm()}clearForm(){this.firstName="",this.email=""}handleInput(i){const e=i.target,a=e.name,t=e.value;a==="firstName"?this.firstName=t:a==="email"&&(this.email=t)}render(){return u`
    <app-header ?enableBack="${!0}"></app-header>
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
    `}};s.styles=[f,b];l([m()],s.prototype,"firstName",2);l([m()],s.prototype,"email",2);s=l([c("app-email")],s);export{s as AppEmail};
//# sourceMappingURL=app-email-BUtuIGM2.js.map
