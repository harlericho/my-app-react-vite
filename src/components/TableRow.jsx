import PropTypes from "prop-types"; // Para validar las propiedades (props) que recibe
function TableRow({ persona }) {
  return (
    <tr>
      <td>{persona.nombre}</td>
      <td>{persona.sexo}</td>
      <td>{persona.pais}</td>
      <td>{persona.telefono}</td>
    </tr>
  );
}
// Esto asegura que la propiedad persona que se pasa al componente tenga la estructura y los tipos de datos correctos
TableRow.propTypes = {
  persona: PropTypes.shape({
    nombre: PropTypes.string,
    sexo: PropTypes.string,
    pais: PropTypes.string,
    telefono: PropTypes.string,
  }),
};

export default TableRow;
