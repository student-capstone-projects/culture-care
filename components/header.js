class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">Culture Care WA</a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">


                    <li class="nav__item">
                        <a href="index.html" class="nav__link active-link">
                            <i class='bx bx-home-alt nav__icon'></i>
                            <span class="nav__name">About</span>
                        </a>
                    </li>


                    <li class="nav__item">
                        <a href="login.html" class="nav__link">
                            <i class='bx bx-user nav__icon'></i>
                            <span class="nav__name">Login</span>
                        </a>
                    </li>


                    <li class="nav__item">
                        <a href="explore.html" class="nav__link">
                            <i class='bx bx-book-alt nav__icon'></i>
                            <span class="nav__name">Explore</span>
                        </a>
                    </li>


                    <li class="nav__item">
                        <a href="contact.html" class="nav__link">
                            <i class='bx bx-message-square-detail nav__icon'></i>
                            <span class="nav__name">Contact</span>
                        </a>
                    </li>

                    <!-- This is a comment -->
                    <li class="nav__item">
                        <a href="help.html" class="nav__link active-link">
                            <i class='bx bx-home-alt nav__icon'></i>
                            <span class="nav__name">Help</span>
                        </a>
                    </li>

                  </ul>
            </div>
            <img src="images/favicon-196.png" alt="" class="nav__img">
        </nav>
    </header>
    `;
  }

}
customElements.define('header-component', Header);
