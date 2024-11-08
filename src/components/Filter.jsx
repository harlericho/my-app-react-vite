import PropTypes from "prop-types"; // Para validar las propiedades (props) que recibe
function Filter({ filtro, onFiltroChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre o país"
        value={filtro}
        onChange={onFiltroChange}
      />
    </div>
  );
}
// Esto asegura que la propiedad persona que se pasa al componente tenga la estructura y los tipos de datos correctos
Filter.propTypes = {
  filtro: PropTypes.string,
  onFiltroChange: PropTypes.func,
};

export default Filter;
