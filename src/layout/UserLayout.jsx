import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserLayout({ children, user, cartItems, setUser, setCartItems }) {
  return (
    <>
      <Navbar
        cartCount={cartItems.length}
        user={user}
        setUser={setUser}
        setCartItems={setCartItems}
      />

      {children}

      <Footer />
    </>
  );
}

export default UserLayout;
