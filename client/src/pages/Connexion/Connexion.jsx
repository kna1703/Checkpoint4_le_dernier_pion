import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../components/contexts/UserContext";
import styles from "./Connexion.module.css";

const ApiUrl = import.meta.env.VITE_API_URL;

function Connexion() {
  const navigate = useNavigate();
  const { login } = useUserContext();
  const [loginInfos, setLoginInfos] = useState({
    pseudo: "",
    password: "",
  });

  const handleLoginInfos = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginInfos.pseudo.trim() === "" || loginInfos.password.trim() === "") {
      console.error("Pseudo et mot de passe doivent être renseignés");
      return;
    }

    try {
      const response = await fetch(`${ApiUrl}/api/auth`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfos),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.info("API response:", responseData);

        if (responseData.user) {
          login(responseData.user);

          if (loginInfos.pseudo === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          console.error("Utilisateur introuvable");
        }
      } else {
        console.info("Login failed with status:", response.status);
        console.error("Identifiants invalides");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.contactBloc}>
          <p className={styles.title}>CONNEXION</p>
          <form onSubmit={handleLogin} className={styles.contactForm}>
            <div className={styles.rowFormRow}>
              <h4>Pseudo</h4>
              <div className={styles.pseudoInput}>
                <input
                  className={styles.textInput}
                  type="text"
                  placeholder="Votre pseudo"
                  name="pseudo"
                  value={loginInfos.pseudo}
                  onChange={handleLoginInfos}
                />
              </div>
            </div>
            <div className={styles.rowFormRow}>
              <h4>Mot de passe</h4>
              <div className={styles.pseudoInput}>
                <input
                  value={loginInfos.password}
                  type="password"
                  name="password"
                  placeholder="Votre mot de passe"
                  onChange={handleLoginInfos}
                />
              </div>
            </div>
            <button type="submit">
              <p>Se connecter</p>
            </button>
          </form>
          <div className={styles.textUnderButton}>
            <p className={styles.underButton}>
              Je suis un·e nouvel·le utilisateur·rice ?
              <Link to="/inscription"> Inscription</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
