import { LitElement, css, html } from 'lit-element'
import { customElement } from 'lit/decorators.js';

@customElement('login-element')
export class Login extends LitElement {


  render() {
    return html`
      <div class="container">
        <h2> LOGIN </h2>
        <input id="email" type = "email" placeholder = "Introduce tu Email"></input>
        <input id="pass" type = "password" placeholder = "Introduce Password"></input>

        <button @click=${this._login.bind(this)}>Iniciar sesión</button>

      </div>
    `;
  }

  _login() {
  const emailInput = this.shadowRoot?.querySelector<HTMLInputElement>('#email');
  const passInput = this.shadowRoot?.querySelector<HTMLInputElement>('#pass');

  const email = emailInput?.value.trim();
  const password = passInput?.value.trim();

  if (!email || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const storedEmail = localStorage.getItem('Usuario');
  const storedPassword = localStorage.getItem('Password');

  // Comparamos con lo que el usuario escribió
  if (email === storedEmail && password === storedPassword) {
    alert('Inicio de sesión exitoso');
    
    this.dispatchEvent(new CustomEvent('sign', {
      detail: { login: true },
      bubbles: true,
      composed: true
    }));
  } else {
    alert('Correo o contraseña incorrectos');
  }

}

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
        background-color: #C3ADFF;
      }
      
      h2{
        color: white;
      }
      
      input{
        width: 90%;
        height: 80px;
        margin-top: 2vh;
        border: solid 2px #414141;
        border-top: 0px;
        border-radius: 5px;
      }
      
      button{
        width: 80%;
        height:80px;
        background: #FA73AE;
        color: white;
        border: none;
        border-radius: 6px;
        margin-top:8vh;
      }

      button:hover {
        background: #FFFAC7;
        color: black;
        cursor:pointer;
      }
    
    `;

}
declare global {
  interface HTMLElementTagNameMap {
    'login-element': Login
  }
}
