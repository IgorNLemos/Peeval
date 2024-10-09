import React from "react";
import CriteriaForm from "./CriteriaForm";
import '../styles/styles.css'; // Import the CSS file

const AdminPanel = () => {
  return (
    <div className="container">
      <h1>Painel de Administração</h1>
      <CriteriaForm />
    </div>
  );
};

export default AdminPanel;
