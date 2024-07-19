
import { Link, Form } from "react-router-dom";
import { useState } from "react";
import Validation from "./InscriptionValidation";
import styles from "./Inscription.module.css";

// Récupération de l'URL de l'API depuis les variables d'environnement
const ApiUrl = import.meta.env.VITE_API_URL;

function Inscription() {
  // Déclaration de l'état pour stocker les valeurs du formulaire
  const [values, setValues] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  // Déclaration de l'état pour stocker les erreurs de validation
  const [errors, setErrors] = useState({});

  // Fonction pour gérer les changements dans les champs de saisie
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setErrors(Validation(values)); // Validation des champs après chaque changement
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors); // Validation des champs avant soumission

    // Si aucune erreur de validation, envoi des données à l'API
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${ApiUrl}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pseudo: values.pseudo,
            email: values.email,
            password: values.password,
          }),
        });

        // Gestion des erreurs de réponse de l'API
        if (response.status !== 200) {
          throw new Error("Erreur lors de l'inscription");
        }
      } catch (err) {
        console.error("Erreur lors de la requête d'inscription:", err);
      }
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBloc}>
        <h2>Inscription</h2>
        <Form
          method="post"
          className={styles.contactForm}
          onSubmit={handleSubmit}
        >
          <label htmlFor="pseudo" className={styles.rowFormRow}>
            <p className={styles.titleForm}>Pseudo</p>
          </label>
          <div className={styles.pseudoInput}>
            <input
              className={styles.textInput}
              type="text"
              placeholder="Votre pseudo"
              name="pseudo"
              value={values.pseudo}
              onChange={handleInput}
            />
            <p className={styles.errorsField}>
              {errors.pseudo !== undefined && <span>{errors.pseudo}</span>}
            </p>
          </div>
          <label htmlFor="email" className={styles.rowFormRow}>
            <p className={styles.titleForm}>Adresse mail</p>
          </label>
          <div className={styles.pseudoInput}>
            <input
              type="email"
              placeholder="Votre adresse mail"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
            <p className={styles.errorsField}>
              {errors.email !== undefined && <span>{errors.email}</span>}
            </p>
          </div>
          <label htmlFor="password" className={styles.rowFormRow}>
            <p className={styles.titleForm}>Mot de passe</p>
          </label>
          <div className={styles.pseudoInput}>
            <input
              type="password"
              placeholder="Votre mot de passe"
              name="password"
              value={values.password}
              onChange={handleInput}
            />
            <p className={styles.errorsField}>
              {errors.password !== undefined && <span>{errors.password}</span>}
            </p>
          </div>

          <button className={styles.buttonSubmit} type="submit">
            <p className={styles.inscriptionButton}>S'inscrire</p>
          </button>
        </Form>
        <div className={styles.textUnderButton}>
          <p className={styles.underButton}>
            J'ai déjà un compte. <Link to="/connexion">Connexion</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
