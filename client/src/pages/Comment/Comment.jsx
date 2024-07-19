// Importation des hooks et styles nécessaires
import { useLoaderData, Form } from "react-router-dom";
import { useState } from "react";
import styles from "./Comment.module.css";

function Comment() {
  // Récupération des données via le hook useLoaderData, qui est supposé charger les commentaires depuis une route.
  const allComments = useLoaderData();
  const ApiUrl = import.meta.env.VITE_API_URL;

  // Déclaration de l'état pour le formulaire de commentaire
  const [commentForm, setCommentForm] = useState({
    pseudo: "",
    comments: "",
  });

  // Déclaration de l'état pour le message de succès
  const [success, setSuccess] = useState(null);

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentForm({
      ...commentForm,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi de la requête POST à l'API pour ajouter un commentaire
      const response = await fetch(`${ApiUrl}/api/comments`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentForm),
      });

      // Vérification de la réponse du serveur
      if (response.ok) {
        setSuccess("Suggestion envoyée avec succès !");
        // Réinitialisation du formulaire
        setCommentForm({
          pseudo: "",
          comments: "",
        });
        // Rechargement de la page pour afficher le nouveau commentaire
        window.location.reload();
      } else {
        setSuccess("Erreur lors de l'envoi de la suggestion!");
      }
    } catch (error) {
      setSuccess("Erreur lors de l'envoi de la suggestion!");
    }
  };


  return (
    <div className={styles.allContain}>
      <div className={styles.allBloc}>
        <div className={styles.containFirst}>
          <p className={styles.titre}>Des remarques, suggestions ?</p>
          <div className={styles.commentaire}>
            {/* Boucle sur les commentaires pour les afficher */}
            {allComments.map((comment) => (
              <div key={comment.id} className={styles.id}>
                <p className={styles.pseudo}>{comment.pseudo}: </p>
                <p className={styles.notes}>{comment.comments}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.containSecond}>
          <div className={styles.form}>
            <Form onSubmit={handleSubmit}>
              <div className={styles.input}>
                <label htmlFor="pseudo" className={styles.label}>
                  Pseudo
                </label>
                <input
                  onChange={handleChange}
                  value={commentForm.pseudo}
                  type="text"
                  name="pseudo"
                  className={styles.text}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="comments" className={styles.label}>
                  Commentaire
                </label>
                <textarea
                  onChange={handleChange}
                  value={commentForm.comments}
                  name="comments"
                  className={styles.text}
                />
              </div>
              {/* Affichage du message de succès */}
              {success && <p>{success}</p>}
              <div className={styles.add}>
                <button type="submit" className={styles.button}>
                  Soumettre
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
