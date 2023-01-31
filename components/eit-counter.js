import { LitElement, html, css } from "lit";

export class MyCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        border: 1px solid red;
      }
      h2 {
        color: red;
      }
      .parrafo {
        color: blue;
        font-size: 2rem;
      }
    `,
  ];

  static properties() {
    return {
      counter: { type: Number },
    };
  }

  render() {
    return html`
      <p>Mi <b>Contador</b>!!!!</p>
      <p class="parrafo">!!!Otra cosa</p>
      <h2>Soy un h2 de color rojo</h2>
    `;
  }
}

customElements.define("my-counter", MyCounter);
