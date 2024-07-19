import { useLoaderData, Form } from "react-router-dom";
import { useState } from "react";
import styles from "./Comment.module.css";

function Comment() {
  const allComments = useLoaderData();
  const ApiUrl = import.meta.env.VITE_API_URL;

  const [commentForm, setCommentForm] = useState({
    pseudo: "",
    comments: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentForm({
      ...commentForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/api/comments`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentForm),
      });

      if (response.ok) {
        setSuccess("Suggestion envoyée avec succès !");
        setCommentForm({
          pseudo: "",
          comments: "",
        });
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
