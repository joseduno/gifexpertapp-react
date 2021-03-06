import { useFetchGifs } from "../../hooks/useFetchGifts"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el custom hook useFetchGifs', () => {

    test('debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'))
        const {data, loading} = result.current

        // No entiendo el waitForNextUpdate
        await waitForNextUpdate()
        // Se implemnta despues de la deconstruccion para obtener el estado inicial

        expect(data).toEqual([])
        expect(loading).toBe(true)
        
    })

    test('debe retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'))

        // No entiendo el waitForNextUpdate
        await waitForNextUpdate()  // esperar que el custom hook aplique el setState respectivo
        // Se implemnta antes de la deconstruccion para obtener el resultado final

        const {data, loading} = result.current
        expect(data.length).toBe(10)
        expect(loading).toBe(false)


    })
    
    
})
