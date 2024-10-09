import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import AdminPanel from "./components/AdminPanel";
import UserPanel from "./components/UserPanel";
import { onAuthStateChange } from "./services/auth"; // Certifique-se de que o nome está correto

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/user" element={<UserPanel />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
