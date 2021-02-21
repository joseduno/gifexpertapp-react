import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    
    const [category, setCategory] = useState('King Kong')

    return (
        <>
            <h2 className='animate__animated animate__fadeInDownBig'>GifExpertApp</h2>
            <hr/>
            <br />
            <AddCategory setCategory={setCategory}/>
            <GifGrid category={category} />

        </>
    )
}

export default GifExpertApp
