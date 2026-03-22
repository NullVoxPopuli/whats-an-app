import { bootApp } from "./app.gjs";

class EmbeddableApp extends HTMLElement {
  #app;

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("span");

    shadow.appendChild(wrapper);

    this.#app = bootApp(wrapper);
  }
  disconnectedCallback() {
    this.#app.destroy();
  }
}

customElements.define("embeddable-app", EmbeddableApp);
