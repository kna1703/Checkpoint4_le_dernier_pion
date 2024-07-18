import { useLoaderData, Form } from "react-router-dom";
import { useState } from "react";

function Comment() {
  const allComments = useLoaderData();
  const ApiUrl = import.meta.env.VITE_API_URL;

  const [commentForm, setCommentForm] = useState({
    pseudo: "",
    comments: "",
  });

  const [error, setError] = useState(null);
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

    if (!commentForm.pseudo || !commentForm.comments) {
      setError("Tous les champs doivent être remplis.");
      setSuccess(null);
      return;
    }

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
        setError(null);
        setCommentForm({
          pseudo: "",
          comments: "",
        });
        window.location.reload();
      } else {
        setError("Erreur lors de l'envoi de la suggestion!");
        setSuccess(null);
      }
    // eslint-disable-next-line no-shadow
    } catch (error) {
      setError("Erreur lors de l'envoi de la suggestion!");
      setSuccess(null);
    }
  };

  return (
    <div>
      <div>
        <p>Des suggestions de jeux ?</p>
        <div>
          {allComments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.pseudo}</p>
              <p>{comment.comments}</p>
            </div>
          ))}
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            onChange={handleChange}
            value={commentForm.pseudo}
            type="text"
            name="pseudo"
          />
        </div>
        <div>
          <label htmlFor="comments">Commentaire</label>
          <textarea
            onChange={handleChange}
            value={commentForm.comments}
            name="comments"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Soumettre</button>
      </Form>
    </div>
  );
}

export default Comment;
