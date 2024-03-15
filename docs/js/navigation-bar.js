// navigation-bar.js

class NavigationBar extends HTMLElement {
    constructor() {
      super(); // HTMLElementのコンストラクタを呼び出す
      this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
      const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${stylesPath}">
        <nav class="navigation">
          <ul>
            <li><a href="../index.html">ホーム</a></li>
            <li><a href="../pages/games.html">ゲーム一覧</a></li>
            <li><a href="../pages/articles/articles.html">記事一覧</a></li>
            <li><a href="../pages/contact.html">連絡先</a></li>
            <li><a href="../pages/about.html">プロフィール</a></li>
            <li><a href="../pages/privacy.html">プライシーポリシー</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  // 新しいカスタムエレメントを定義する
  customElements.define('navigation-bar', NavigationBar);
  