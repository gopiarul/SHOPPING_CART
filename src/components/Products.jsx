import gift1 from "../assets/images/gift1.jpg";
import gift2 from "../assets/images/gift2.jpg";
import gift3 from "../assets/images/gift3.jpg";

function Products() {
  const products = [
    { id: 1, name: "Photo Frame", price: "₹499", img: gift1 },
    { id: 2, name: "Custom Mug", price: "₹299", img: gift2 },
    { id: 3, name: "Gift Hamper", price: "₹999", img: gift3 }
  ];

  return (
    <section style={styles.container}>
      {products.map(product => (
        <div key={product.id} style={styles.card}>
          <img src={product.img} alt={product.name} style={styles.image} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "40px"
  },
  card: {
    width: "200px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

export default Products;
