import React from "react";
import EvaluationForm from "./EvaluationForm";
import '../styles/styles.css'; // Import the CSS file

const UserPanel = () => {
  return (
    <div className="container">
      <h1>Painel do Usuário</h1>
      <EvaluationForm />
    </div>
  );
};

export default UserPanel;
