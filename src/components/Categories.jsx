// src/components/Categories.jsx
function Categories() {
  const categories = [
    "Birthday Gifts",
    "Anniversary Gifts",
    "Personalized Gifts",
    "Cakes & Flowers"
  ];

  return (
    <section style={styles.container}>
      {categories.map((cat, index) => (
        <div key={index} style={styles.card}>
          {cat}
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px"
  },
  card: {
    padding: "20px",
    background: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    borderRadius: "8px"
  }
};

export default Categories;
