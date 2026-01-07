import { useState } from 'react';

function InputConsola() {
  const [valor, setValor] = useState('');

  const handleClick = () => {
    console.log('Valor del input:', valor);
  };

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Escribe algo..."
      />
      <button onClick={handleClick}>Imprimir en consola</button>
    </div>
  );
}

export default InputConsola;

