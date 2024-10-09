import React, { useState } from "react";
import { createEvaluation } from "../services/firestore";
import '../styles/styles.css'; // Import the CSS file

const EvaluationForm = () => {
  const [evaluation, setEvaluation] = useState({
    criteriaId: "",
    rating: "",
    comment: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createEvaluation(evaluation);
    setEvaluation({
      criteriaId: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="criteriaId">ID do Critério:</label>
      <input
        type="text"
        id="criteriaId"
        placeholder="ID do Critério"
        value={evaluation.criteriaId}
        onChange={(e) =>
          setEvaluation({ ...evaluation, criteriaId: e.target.value })
        }
      />
      <label htmlFor="rating">Avaliação:</label>
      <input
        type="number"
        id="rating"
        min="1"
        max="5"
        placeholder="Avaliação (1-5)"
        value={evaluation.rating}
        onChange={(e) =>
          setEvaluation({ ...evaluation, rating: e.target.value })
        }
      />
      <label htmlFor="comment">Comentário:</label>
      <textarea
        id="comment"
        placeholder="Comentário"
        value={evaluation.comment}
        onChange={(e) =>
          setEvaluation({ ...evaluation, comment: e.target.value })
        }
      />
      <button type="submit">Enviar Avaliação</button>
    </form>
  );
};

export default EvaluationForm;
