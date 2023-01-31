import { LitElement, html, css } from "lit";
import { WiredButton } from 'wired-elements/lib/wired-button.js';
import { WiredInput } from 'wired-elements/lib/wired-input.js';
import { WiredCard } from 'wired-elements/lib/wired-card.js';
import { WiredSlider } from 'wired-elements/lib/wired-slider.js';

export class MyCounter extends LitElement {
  static styles = [
    css`
      :host {
        display:inline-block;
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
      .increment{
        background-color:blue;
      }
      wired-input{
        background-color:yellow;
        width:60px;
        font-size:1.5em;
        padding:0.5em;
      }
      .decrement{
        background-color:red;
      }
      .restart{
        background-color:yellow;
      }
      wired-card{
        margin:1em;
        padding:1em;
      }
    `,
  ];

  static properties={
    counter: {
         type: Number,
        reflect:true },
    quantity:{
        type:Number
    }  
  }

  constructor(){
    super();
    this.counter=0;
    this.quantity=10;
  }

  render() {
    return html`
    <wired-card elevation="3">
        <slot></slot>
      <p>Mi <b>Contador</b>!!!!</p>
      <h3 class="contador">${this.counter}</h3>
      <p>
        <wired-input id="quantity" type="number" .value="${this.quantity}"></wired-input>
      </p>
      <p><wired-slider 
      value="10" 
      min="1" 
      max="20" 
      @change=${this.doChangeQuantity}>
    </wired-slider>
    </p>
      <wired-button elevation="10" outline @click=${this.increment} class="increment">Incrementar</wired-button>
      <wired-button elevation="3" outline @click=${this.decrement} class="decrement">Decrementar</wired-button>
      <wired-button elevation="3" outline @click=${this.restart} class="restart">Reiniciar</wired-button>
  </wired-card>
    `;
  }


    doChangeQuantity(e){
        this.quantity=e.detail.value;
    }

    increment(){
        let quantity = this.shadowRoot.getElementById('quantity').value
        this.counter += parseInt(quantity);
    }

    decrement(){
        let quantity = this.shadowRoot.getElementById('quantity').value
        this.counter--;
    }

    restart(){
        this.counter=0;
    }
}

customElements.define("my-counter", MyCounter);
