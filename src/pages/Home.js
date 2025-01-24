import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import placeHolderImg from "../assets/anakin.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Gallery</h1>
          <p>Explore our collection of beautiful images and artworks</p>
          <div className={styles.heroImage}>
            <img src={placeHolderImg} alt="Hero" />
          </div>
          <button
            onClick={() => navigate("/gallery")}
            className={styles.button}
          >
            Go To Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
