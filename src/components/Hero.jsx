import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <section style={styles.hero}>
      <img src={banner} alt="Gift Banner" style={styles.image} />
      <h1>Make Every Moment Special 🎁</h1>
      <p>Personalized gifts for every occasion</p>
      <button>Shop Now</button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "40px",
    background: "#fce4ec"
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "10px"
  }
};

export default Hero;
