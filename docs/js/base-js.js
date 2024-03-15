class BaseJs extends HTMLElement {
    constructor() {
      super(); // HTMLElementのコンストラクタを呼び出す
      this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
      const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
      this.shadowRoot.innerHTML = `

      `;
    }
  }
// 新しいカスタムエレメントを定義する
customElements.define('base-js', BaseJs);

  
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
// navigation-bar.js

class NavigationBar extends HTMLElement {
  constructor() {
    super(); // HTMLElementのコンストラクタを呼び出す
    this.attachShadow({ mode: 'open' }); // シャドウDOMを開く
    const stylesPath = this.getAttribute('styles-path') || '../css/styles.css';
    const pathTopDefine = this.getAttribute('path-top-define') || '';
    const pathPagesDefine = this.getAttribute('path-pages-define') || "pages/";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${stylesPath}">
      <nav class="navigation">
        <ul>
          <li><a href="${pathTopDefine}index.html">ホーム</a></li>
          <li><a href="${pathTopDefine}${pathPagesDefine}games.html">ゲーム一覧</a></li>
          <li><a href="${pathTopDefine}${pathPagesDefine}articles/articles.html">記事一覧</a></li>
          <li><a href="${pathTopDefine}${pathPagesDefine}contact.html">連絡先</a></li>
          <li><a href="${pathTopDefine}${pathPagesDefine}about.html">プロフィール</a></li>
          <li><a href="${pathTopDefine}${pathPagesDefine}privacy.html">プライシーポリシー</a></li>
        </ul>
      </nav>
    `;
  }
}

// 新しいカスタムエレメントを定義する
customElements.define('navigation-bar', NavigationBar);

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
