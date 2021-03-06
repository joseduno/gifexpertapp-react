import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'


describe('Pruebas en el componente GifExpertApp', () => {

    test('debe mostrar correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
