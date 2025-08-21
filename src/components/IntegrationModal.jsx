import React from 'react';
import './IntegrationModal.css';

function IntegrationModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // N'affiche rien si le modal n'est pas ouvert
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
        <pre><code>&lt;script src="https://VOTRE-DOMAINE.com/script.js" defer&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  );
}

export default IntegrationModal;