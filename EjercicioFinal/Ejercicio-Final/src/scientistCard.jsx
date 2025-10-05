import "./scientistCard.css";

const CardScientist = ({
  nombre,
  profesion,
  premios,
  descubrimientos,
  imagenUrl,
  conteoPremios
}) => {
  return (
    <div className="scientist-card"> <h2>{nombre}</h2>
      <img src={imagenUrl} alt={nombre} className="card-image" />
      <ul>
        <li>
          <strong>Profesión:</strong> {profesion}
        </li>
        <li>
          <strong>Premios: {conteoPremios}</strong> ({premios})
        </li>
        <li>
          <strong>Descubrió:</strong> {descubrimientos}
        </li>
      </ul>
    </div>
  );
};

export default CardScientist;