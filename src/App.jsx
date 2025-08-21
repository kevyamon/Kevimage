import React, { useState } from 'react';

// Importation des composants
import Header from './components/Header';
import Footer from './components/Footer';
import IntegrationModal from './components/IntegrationModal';

// Importation du style principal
import './App.css';

function App() {
  // On utilise le hook "useState" pour gérer l'état du modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h2>Optimisez votre site sans effort</h2>
        <p>
          Obtenez le script pour compresser automatiquement toutes les images de
          votre site web.
        </p>
        <button onClick={handleOpenModal} className="cta-button">
          Obtenir mon script d'intégration
        </button>
      </main>

      <Footer />

      {/* Le modal est contrôlé par l'état isModalOpen */}
      <IntegrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;