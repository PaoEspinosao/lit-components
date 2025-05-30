import { LitElement, html,css } from "lit-element";
import { customElement, property } from 'lit/decorators.js';
import "./my-element.ts";

@customElement('app-login')
export class AppLogin extends LitElement {
    @property({ type: Boolean }) success = false;

  static styles = css`
    my-element {
      display: flex;
      position: absolute;
      right: 38%;
      top: 10%;
    }
  `;

  render() {
    return html`
      ${this.success
        ? html`<h1>Bienvenido</h1>`
        : html`<my-element @sign=${this._hiddenLogin}></my-element>`}
    `;
  }

  _hiddenLogin = () => {
    this.success = true;
  };
}
