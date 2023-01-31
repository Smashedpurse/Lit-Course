import { LitElement,html } from "lit";

export class MyCounter extends LitElement {
    render(){
        return html`
        <p>Soy tu primer<b>Componente</b>!!!!</p>
        `;
    }
}

customElements.define('my-counter', MyCounter);