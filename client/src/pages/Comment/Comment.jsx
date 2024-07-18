import { useLoaderData } from "react-router-dom";

function Comment() {
    const allComments = useLoaderData();
  return (
    <div>
     {allComments.map((comments) => (
        <div key={comments.id}>
        <p>{comments.pseudo}</p>
        <p>{comments.comments}</p>
        </div>
     ))}
    </div>
  );
}

export default Comment;
