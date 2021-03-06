import getGifs from '../../helpers/getGifs'

describe('Pruebas a la funcion getGifs', () => {

    test('debe traer 10 elementos ', async() => {
        const gifs = await getGifs('OnePunch')
        expect(gifs.length).toBe(10)
    })

    test('debe traer un arreglo con longitud igual a 0', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
})
