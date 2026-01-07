import Fruta from './Fruta';

function ListaFrutas({ frutas }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {frutas.map((fruta, index) => (
        <Fruta key={index} nombre={fruta} />
      ))}
    </ul>
  );
}

export default ListaFrutas;

