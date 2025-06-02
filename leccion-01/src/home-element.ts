import { LitElement, html,css } from "lit-element";
import { customElement, property } from 'lit/decorators.js';
import "./login-element.ts";
import './header-element.js'; 
import './footer-element.ts';
import './poke-api.ts'


@customElement('home-element')
export class Home extends LitElement {
    @property({ type: Boolean }) success = false;

  static styles = css`
    login-element {
      display: flex;
      position: absolute;
      justify-content: center;
      right: 40%;
      top: 10%;
    }
  `;

  render() {
    return html`
      ${this.success
        ? html`
        <header-element></header-element>
        <poke-api></poke-api>
        <footer-element></footer-element>
        `
        : html`<login-element @sign=${this._hiddenLogin}></login-element>`} 
    `;
  }

  _hiddenLogin = () => {
    this.success = true;
  };
}
