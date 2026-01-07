import { useState } from 'react';

function FormularioNombre() {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      {nombre && <p>Hola, {nombre}</p>}
    </div>
  );
}

export default FormularioNombre;

