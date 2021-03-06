import React from 'react'
import GifGridItem from './GifGridItem'
import {useFetchGifs} from '../hooks/useFetchGifts'
import PropTypes from 'prop-types'


const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category)

    return (
        <div className='card-grid'>
            {/* con {...img} pasamos cada propiedad y valor de la imagen como 
            argumentos individuales al componente GifGridItem */}
            {loading && <p className='animate__animated animate__heartBeat'>Cargando...</p>}
            {images.map(img => <GifGridItem key={img.id} {...img} />)}
        </div>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


export default GifGrid
