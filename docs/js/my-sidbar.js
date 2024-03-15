class MySidebar extends HTMLElement {
    constructor() {
      super(); // HTMLElementのコンストラクタを呼び出す
      this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
  
      const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${stylesPath}">
        <aside class="sidebar">
            <h4>カテゴリー</h4>
            <ul>
                <li><a href="#">ウェブ開発</a></li>
                <li><a href="#">プログラミング言語</a></li>
                <li><a href="#">ツールとリソース</a></li>
                <li><a href="#">イベントとニュース</a></li>
            </ul>
            <h4>アーカイブ</h4>
            <ul>
                <li><a href="#">2024年3月</a></li>
                <li><a href="#">2024年2月</a></li>
                <li><a href="#">2024年1月</a></li>
            </ul>
        </aside>
      `;
    }
  }
  
  // 新しいカスタムエレメントを定義する
  customElements.define('my-sidebar', MySidebar);
  