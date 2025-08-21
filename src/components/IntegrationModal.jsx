// Fichier: src/components/IntegrationModal.jsx

import React from 'react';
import './IntegrationModal.css';

function IntegrationModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h3>Intégrez le script</h3>
        <p>
          Copiez le code ci-dessous et collez-le sur votre site, juste avant la
          balise de fermeture <code>&lt;/body&gt;</code>.
        </p>
        {/* MISE À JOUR ICI */}
        <pre><code>&lt;script src="https://kevimage-backend.onrender.com/script.js" defer&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  );
}

export default IntegrationModal;