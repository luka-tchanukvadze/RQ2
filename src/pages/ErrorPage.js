import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page not found</p>
        <button onClick={() => navigate("/")} className={styles.button}>
          Return Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
