import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el componente AddCategory', () => {

    const setCategory = jest.fn()  // Para emular una funcion, facilita saber si es llamada o no
    let wrapper

    beforeEach(()=>{
        jest.clearAllMocks()
        // en cada prueba se reenderiza el componente para dejarlo como nuevo
        // si no se hace, los cambios en los tests se mantienen a medida que se van ejecutando
        wrapper = shallow(<AddCategory setCategory={setCategory}/>)
    })

    test('debe renderizar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        // el segundo argumento es el evento
        input.simulate('change', {target: {value:value}})  // para simular cambio en el input text
    })

    test('No debe postear la informacion si el input tiene menos de 2 caracteres', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategory).not.toHaveBeenCalled()
    })

    test('Debe llamar al setCategory y limpiar la caja de texto', () => {
        const input = wrapper.find('input')
        input.simulate('change', {target: {value: 'Hola Mundo'}})
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategory).toHaveBeenCalledTimes(1)

        // expect.any(Function), para asegurarse que el argumento de setCategory 
        // sea una algo específico (Function, String, Number, etc)
        expect(setCategory).toHaveBeenCalledWith(expect.any(String))
        
        expect(input.props().value).toBe('')
    })
    
})
