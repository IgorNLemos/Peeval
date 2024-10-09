import React, { useState } from "react";
import { createCriteria } from "../services/firestore";
import '../styles/styles.css'; // Import the CSS file

const CriteriaForm = () => {
  const [criteria, setCriteria] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCriteria(criteria);
    setCriteria({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Critério"
        value={criteria.name}
        onChange={(e) => setCriteria({ ...criteria, name: e.target.value })}
      />
      <textarea
        placeholder="Descrição do Critério"
        value={criteria.description}
        onChange={(e) => setCriteria({ ...criteria, description: e.target.value })}
      />
      <button type="submit">Criar Critério</button>
    </form>
  );
};

export default CriteriaForm;
