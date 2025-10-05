import CardScientist from "./scientistCard";
import {scientists} from "./scientist";


function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Científicos Notables</h1>
      {scientists.map((scientist, index) => (
        <CardScientist
          key={index}
          nombre={scientist.nombre}
          imagenUrl={scientist.imagenUrl}
          profesion={scientist.profesion}
          premios={scientist.premios}
          descubrimientos={scientist.descubrimientos}
          conteoPremios={scientist.conteoPremios}
        />
      ))}
    </div>
  )
}
export default App
