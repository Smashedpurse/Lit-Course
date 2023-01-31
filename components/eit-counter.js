import { LitElement, html, css } from "lit";
import { WiredButton } from 'wired-elements/lib/wired-button.js';
import { WiredInput } from 'wired-elements/lib/wired-input.js';

export class MyCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        border: 1px solid;
      }
      h2 {
        color: red;
      }
      .parrafo {
        color: blue;
        font-size: 2rem;
      }
      .contador{
        color: blue;
      }
      @media(min-width:500px){
        .parrafo{
            font-size:3em;
        }
      }
      wired-button{
        background-color:blue;
      }
      input{
        width:30px;
        font-size:1.5em;
        padding:0.5em;
      }
    `,
  ];

  static properties={
    counter: {
         type: Number,
        reflect:true }    
  }

  constructor(){
    super();
    this.counter=0;
  }

  render() {
    return html`
        <slot></slot>
      <p>Mi <b>Contador</b>!!!!</p>
      <h3 class="contador">${this.counter}</h3>
      <p>
        <wired-input id="quantity" type="number" value="1">
      </p>
      
      <wired-button elevation="3" outline @click=${this.increment}>Incrementar</wired-button>
      <wired-button elevation="3" outline @click=${this.decrement}>Decrementar</wired-button>
      
    `;
  }

    increment(){
        let quantity = this.shadowRoot.getElementById('quantity').value
        this.counter += parseInt(quantity);
    }

    decrement(){
        let quantity = this.shadowRoot.getElementById('quantity').value
        this.counter--;
    }
}

customElements.define("my-counter", MyCounter);
