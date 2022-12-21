import {render} from '@testing-library/react'
import Buscador from '../componentes/Buscador';


describe('<Buscador/>', () => {
    test ('Should render component', () => {
        const onBuscar = jest.fn();
        const view = render(<Buscador onBuscar={onBuscar}/>);
        expect (view.container).toBeInTheDocument(true);
    })
})