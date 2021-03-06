import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifts'


jest.mock('../../hooks/useFetchGifts')


describe('Pruebas sobre el componente GifGrid', () => {
    const category = 'Godzilla'
    const gifs = [{
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',  // no importa si no existe
        title: 'Cualquier cosa'
    },{
        id: '123',
        url: 'https://localhost/cualquier/cosa2.jpg',  // no importa si no existe
        title: 'Cualquier cosa 2'
    }]

    test('debe renderizar correctamente el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        // Se debe renderizar el componente luego de simular el uso de los custom hooks
        // si la llamada al shallow ocurre fuera del test, NO FUNCIONA
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar items cuando se termine la peticion de gifs', () => {
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    
})
