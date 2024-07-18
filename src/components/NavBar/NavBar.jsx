import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent:"space-between", alignItems: 'center' }}>
      <h1>Ecomerce</h1>
      <section>
        <Link to="/category/Bazar"> Bazar </Link>
        <Link to="/category/Living"> Living </Link>
        <Link to="/category/Deco"> Deco </Link>
      </section>
      <CartWidget />
    </nav>
  );
}

export default NavBar
