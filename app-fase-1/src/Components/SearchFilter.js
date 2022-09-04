import React from "react"

const SearchFilter = ( {value, onChange}) =>      
<div className="form-floating mb-3">
  <input value={value} onChange={onChange}  type="text" id="floatingInput" className="form-control form-control-lg" placeholder="Affenpinscher..."/>
  <label htmlFor="floatingInput">Buscar por nombre de Raza</label>
</div>
export default SearchFilter;


