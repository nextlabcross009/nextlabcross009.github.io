class Base extends HTMLElement {
    constructor() {
      super(); // HTMLElementのコンストラクタを呼び出す
      this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
      const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
      this.shadowRoot.innerHTML = `

      `;
    }
  }
  
  // 新しいカスタムエレメントを定義する
  customElements.define('base', Base);
  