import { css, LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('header-element')
export class HeaderElement extends LitElement {

    static styles = css `
      .container{
        display:flex;
        background: #C3ADFF;
        align-items: center; 
        color: white;
        
      }
    `

    render() {
        return html`
      <div class="container">
              <h1> Bienvenido </h2>
      </div>
    `;
    }

}