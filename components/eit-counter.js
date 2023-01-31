import { LitElement, html, css } from "lit";

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

      input{
        width:30px
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
        <input id="quantity" type="text">
      </p>
      <button @click=${this.increment}>+ 1</button>
      <button @click=${this.decrement}>- 1</button>
    `;
  }

    increment(){
        this.counter++;
    }

    decrement(){
        this.counter--;
    }
}

customElements.define("my-counter", MyCounter);
