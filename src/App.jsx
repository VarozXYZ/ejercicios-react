import Saludo from './components/Saludo';
import Perfil from './components/Perfil';
import Tarjeta from './components/Tarjeta';
import BotonAlerta from './components/BotonAlerta';
import InputConsola from './components/InputConsola';
import ListaFrutas from './components/ListaFrutas';
import Contador from './components/Contador';
import FormularioNombre from './components/FormularioNombre';
import ListaTareas from './components/ListaTareas';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const frutas = ['Manzana', 'Plátano', 'Naranja', 'Fresa'];
  const tareasIniciales = ['Estudiar React', 'Hacer ejercicios', 'Practicar hooks'];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dojo React: Componentes, Props y Hooks</h1>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 1: Componente Simple</h2>
        <Saludo nombre="Alvaro" />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 2: Componente con Props Múltiples</h2>
        <Perfil nombre="María" edad={25} profesion="Desarrolladora" />
        <Perfil nombre="Juan" edad={30} profesion="Diseñador" />
        <Perfil nombre="Ana" edad={28} profesion="Product Manager" />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 3: Componente Anidado</h2>
        <Tarjeta titulo="React" contenido="Una biblioteca de JavaScript para construir interfaces de usuario" />
        <Tarjeta titulo="Vite" contenido="Una herramienta de construcción rápida para desarrollo frontend" />
        <Tarjeta titulo="Hooks" contenido="Funciones que permiten usar estado y otras características de React" />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 4: Evento Click Simple</h2>
        <BotonAlerta />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 5: Evento Input Simple</h2>
        <InputConsola />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 6: Lista de Props Estática</h2>
        <ListaFrutas frutas={frutas} />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 7: useState Básico</h2>
        <Contador />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 8: useState con Input</h2>
        <FormularioNombre />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 9: Lista Dinámica con Props</h2>
        <ListaTareas tareasIniciales={tareasIniciales} />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Ejercicio 10: Formulario con react-hook-form</h2>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;
