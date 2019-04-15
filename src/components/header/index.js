import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = props => (
  <header class={style.header}>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
    </nav>
  </header>
);

export default Header;
