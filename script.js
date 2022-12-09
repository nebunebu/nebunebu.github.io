class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <div class="navbar">
        <a href="/index.html" class="underline">home</a>
        <a href="/writings.html" class="underline">writing</a>
        <a href="/about.html" class="underline">about</a>
      </div>
    </nav>
    `;
  }
}

customElements.define('main-header', Header);
