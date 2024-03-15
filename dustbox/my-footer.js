class MyFooter extends HTMLElement {
  constructor() {
    super(); // HTMLElementのコンストラクタを呼び出す
    this.attachShadow({ mode: 'open' }); // シャドウDOMを開く

    const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${stylesPath}">
      <footer class="footer">
        <p>&copy; 2024 NEXTLAB. All rights reserved.</p>
      </footer>
    `;
  }
}

// 新しいカスタムエレメントを定義する
customElements.define('my-footer', MyFooter);
