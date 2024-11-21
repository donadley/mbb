import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
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
`;