import React from 'react';
import opinionesData from './opinionesData';

const Opiniones = () => {
  return (
    <div>
      <h2>Opiniones de nuestros clientes</h2>
      <ul>
        {opinionesData.map((opinion) => (
          <li key={opinion.id}>
            <h3>{opinion.nombre} ({opinion.calificacion} estrellas)</h3>
            <p>{opinion.comentario}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Opiniones;