// Importation des hooks et contextes nécessaires
import { Link, useNavigate, Form } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../components/contexts/UserContext";
import styles from "./Connexion.module.css";

// Récupération de l'URL de l'API depuis les variables d'environnement
const ApiUrl = import.meta.env.VITE_API_URL;

function Connexion() {
  // Utilisation du hook useNavigate pour rediriger l'utilisateur après la connexion
  const navigate = useNavigate();

  // Récupération de la fonction login depuis le contexte utilisateur
  const { login } = useUserContext();

  // Déclaration de l'état pour stocker les informations de connexion
  const [loginInfos, setLoginInfos] = useState({
    pseudo: "",
    password: "",
  });

  // Fonction pour gérer les changements dans les champs de connexion
  const handleLoginInfos = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value });
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = async (e) => {
    e.preventDefault();

    // Vérification que les champs pseudo et password ne sont pas vides
    if (loginInfos.pseudo.trim() === "" || loginInfos.password.trim() === "") {
      console.error("Pseudo et mot de passe doivent être renseignés");
      return;
    }

    try {
      // Envoi de la requête POST à l'API pour authentifier l'utilisateur
      const response = await fetch(`${ApiUrl}/api/auth`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfos),
      });

      // Vérification du statut de la réponse
      if (response.status === 200) {
        const responseData = await response.json();
        console.info("API response:", responseData);

        // Si l'utilisateur est trouvé, on met à jour le contexte utilisateur et on redirige
        if (responseData.user) {
          login(responseData.user);

          // Redirection vers la page admin ou la page d'accueil en fonction du pseudo
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
    <div className={styles.contain}>
      <div className={styles.allBloc}>
        <div className={styles.bloc}>
          <p className={styles.title}>CONNEXION</p>
          <Form onSubmit={handleLogin} className={styles.contactForm}>
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
          </Form>
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
