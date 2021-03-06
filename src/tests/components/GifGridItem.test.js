import { shallow } from "enzyme"
import GifGridItem from '../../components/GifGridItem'


describe('Pruebas en el componentes GifGridItem', () => {

    const title = 'Testing'
    const url = 'testing.com'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('debe tener imagen igual a url y alt de los props', () => {
        const img = wrapper.find('img')
        expect(img.props().src).toBe(url)  // tambien funciona img.prop('src')
        expect(img.props().alt).toBe(title)
    })

    test('debe tener la clase animate__flipInX', () => {
        const div = wrapper.find('div')
        const validation = div.prop('className').includes('animate__flipInX')
        expect(validation).toBe(true)
    })
    
})
