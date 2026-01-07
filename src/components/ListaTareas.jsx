import { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareasIniciales }) {
  const [tareas, setTareas] = useState(tareasIniciales);

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span>{tarea}</span>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;

