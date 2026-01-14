import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h2>ImpressiveGift</h2>
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#fff",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};

export default Header;
