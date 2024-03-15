class MyHeader extends HTMLElement {
    constructor() {
      super(); // HTMLElementのコンストラクタを呼び出す
      this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
      const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${stylesPath}">
        <header class="header">
            <h1>NEXTLAB</h1>
            <p>次の新しいゲームへ</p>
        </header>
      `;
    }
  }
  
  // 新しいカスタムエレメントを定義する
  customElements.define('my-header', MyHeader);
  