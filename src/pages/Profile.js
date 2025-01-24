import { useParams } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile() {
  const { name } = useParams();

  return (
    <div className={styles.profile}>
      <div className={styles.card}>
        <h1>Made By {name || "Luka"}</h1>
      </div>
    </div>
  );
}

export default Profile;
