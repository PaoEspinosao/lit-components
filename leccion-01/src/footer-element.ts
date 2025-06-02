import { css, LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('footer-element')
export class FooterElement extends LitElement {

    static styles = css `
      .container{
        display:flex;
        justifiy-content: flex-end;
        background: #C3ADFF; 
        text-align: center;
        color: white;
        
      }
    `

    render() {
        return html`
      <div class="container">
              <h2> Gracias por visitar POKELIT</h2>
      </div>
    `;
    }

}