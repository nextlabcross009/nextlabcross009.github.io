class MyHeader extends HTMLElement {
    constructor() {
      super(); // HTMLElementのコンストラクタを呼び出す
      this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../css/styles.css">
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <header class="header">
            <h1>NEXTLAB</h1>
            <p>次の新しいゲームへ</p>
        </header>
      `;
    }
  }
  
  // 新しいカスタムエレメントを定義する
  customElements.define('my-header', MyHeader);
  