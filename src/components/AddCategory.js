import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const handleOnChange = e => setInputValue(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()  // Evita que refresque la pagina al presionar enter

        if (inputValue.trim().length > 2) {
            {/* No es necesario mandar las categorias como paramentro al componente, 
            en la funcion del hook (setCategories), por defecto se recibe como primer
            parametro, el ultimo estado de las categorias */}
            setCategory(inputValue)
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleOnChange}
                placeholder='Buscar'
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,  // Para obligar a recibir una funcion como argumento
}

export default AddCategory
