import TableRow from "./TableRow";
import PropTypes from "prop-types"; // Para validar las propiedades (props) que recibe
function PersonTable({ personas }) {
  return (
    <table className="table-responsive">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Sexo</th>
          <th>País</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {personas.length > 0 ? (
          personas.map((persona, index) => (
            <TableRow key={index} persona={persona} />
          ))
        ) : (
          <tr>
            <td colSpan="4" className="no-data-message">
              No se encontraron personas
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
// Esto asegura que la propiedad persona que se pasa al componente tenga la estructura y los tipos de datos correctos
PersonTable.propTypes = {
  personas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string,
      sexo: PropTypes.string,
      pais: PropTypes.string,
      telefono: PropTypes.string,
    })
  ),
};

export default PersonTable;
