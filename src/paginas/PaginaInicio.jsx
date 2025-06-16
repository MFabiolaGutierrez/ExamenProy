import React, { useState } from 'react';
import './PaginaInicio.css';

export default function PaginaInicio() {
  const [activo, setActivo] = useState(null);

  const toggle = (id) => {
    setActivo(activo === id ? null : id);
  };

  return (
    <div className="pagina-inicio">
      <h2 className="titulo">Danzas de las Regiones de Bolivia</h2>
      <div className="acordeon-item">
        <button className="acordeon-header" onClick={() => toggle(1)}>
          Altiplano – La Morenada <span>{activo === 1 ? '▲' : '▼'}</span>
        </button>
        {activo === 1 && (
          <div className="acordeon-body">
            <p>
              La Morenada es típica de La Paz y Oruro. Es elegante y solemne, con pasos lentos pero fuertes.
            </p>
          </div>
        )}
      </div>
      <div className="acordeon-item">
        <button className="acordeon-header" onClick={() => toggle(2)}>
          Valles – Cueca Chuquisaqueña <span>{activo === 2 ? '▲' : '▼'}</span>
        </button>
        {activo === 2 && (
          <div className="acordeon-body">
            <p>
              La Cueca en los valles (Cochabamba, Chuquisaca, Tarija) es coqueta y romántica. Ideal para mostrar técnica y expresión.
            </p>
          </div>
        )}
      </div>

      <div className="acordeon-item">
        <button className="acordeon-header" onClick={() => toggle(3)}>
          Llanos Orientales – Taquirari <span>{activo === 3 ? '▲' : '▼'}</span>
        </button>
        {activo === 3 && (
          <div className="acordeon-body">
            <p>
              Alegre, rápido y cadencioso. El Taquirari es típico del Beni y Santa Cruz, lleno de energía.
            </p>
          </div>
        )}
      </div>

      <div className="acordeon-item">
        <button className="acordeon-header" onClick={() => toggle(4)}>
          Chaco – Chacarera Chaqueña <span>{activo === 4 ? '▲' : '▼'}</span>
        </button>
        {activo === 4 && (
          <div className="acordeon-body">
            <p>
              Influencia folklórica fuerte, con mucho ritmo. Representa la zona chaqueña, como Tarija y parte de Chuquisaca.
            </p>
          </div>
        )}
      </div>

      <div className="acordeon-item">
        <button className="acordeon-header" onClick={() => toggle(5)}>
          Yungas – Saya Afroboliviana <span>{activo === 5 ? '▲' : '▼'}</span>
        </button>
        {activo === 5 && (
          <div className="acordeon-body">
            <p>
              La Saya es un poderoso baile afroboliviano lleno de historia, fuerza y comunidad. Originaria de los Yungas (La Paz).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
