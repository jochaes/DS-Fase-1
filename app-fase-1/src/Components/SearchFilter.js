import React from "react"

const SearchFilter = ( {value, onChange}) =>      
<div className="mb-3">
  <label htmlFor="inputBusqueda" className="form-label">Buscar por nombre de Raza</label>
  <input value={value} onChange={onChange}  type="text" className="form-control" id="inputBusqueda" placeholder="Affenpinscher..."/>
</div>
export default SearchFilter;


