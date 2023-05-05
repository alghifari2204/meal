class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
 
  render() {
    this.innerHTML = `<h2>Welcome To The foodMeal</h2>`;
  }
}

customElements.define('app-bar', AppBar);