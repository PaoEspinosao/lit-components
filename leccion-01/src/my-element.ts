import { LitElement, css, html } from 'lit-element'
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class Login extends LitElement {


  render() {
    return html`
      <div class="container">
        <h2> Login </h2>
        <input id="email" type = "email" placeholder = "Introduce tu Email"></input>
        <input id="pass" type = "password" placeholder = "Introduce Password"></input>

        <button @click=${this._login.bind(this)}>Iniciar sesión</button>

      </div>
    `;


  }

  _login() {
    const emailInput = this.shadowRoot?.querySelector<HTMLInputElement>('#email');
    const passInput = this.shadowRoot?.querySelector<HTMLInputElement>('#pass');

    if (!!emailInput || !!passInput) {
      this.dispatchEvent(new CustomEvent(`sign`, {
        detail: { login: true },
        bubbles: true,
        composed: true
      }));
    }
  };


  static styles = css`
      .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        border-radius: 10px;
        width: 350px;
        height: 400px;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
        background-color: whithe;
      }
      
      input{
        width: 90%;
        height:30px;
        margin-top: 8vh;
        border: solid 2px #414141;
        border-top: 0px;
        border-radius: 5px;
      }
      
      button{
        width: 60%;
        height:40px;
        background: #781A8C;
        color: white;
        border: none;
        border-radius: 6px;
        margin-top:8vh;
      }

      button:hover {
        background: #E7DDFF;
        color: black;
        cursor:pointer;
      }
    
    `;

}
declare global {
  interface HTMLElementTagNameMap {
    'my-element': Login
  }
}
