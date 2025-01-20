import React from 'react';
import './App.css';

function Counter() {
  // Déclaration du state pour le compteur
  const [count, setCount] = React.useState(0);
  const [warning, setWarning] = React.useState(false); // Pour gérer l'affichage du message d'avertissement

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
    setWarning(false); // Réinitialise l'avertissement si l'utilisateur incrémente
  };

  // Fonction pour décrémenter le compteur
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setWarning(false); // Réinitialise l'avertissement si le compteur est valide
    } else {
      setWarning(true); // Affiche un message d'avertissement si l'utilisateur tente de décrémenter en dessous de 0
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Compteur : {count}</h1>

      {/* Boutons pour incrémenter et décrémenter */}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>

      {/* Affichage du message d'avertissement si nécessaire */}
      {warning && <p style={{ color: "red", fontWeight: "bold" }}>Attention : Vous ne pouvez pas descendre en dessous de 0 !</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;