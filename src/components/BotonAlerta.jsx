function BotonAlerta() {
  const handleClick = () => {
    alert('¡Has hecho clic en el botón!');
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
}

export default BotonAlerta;

