import { getByText, render, screen } from '@testing-library/react';
import CareScale from './CareScale';


describe("CareScale component test", () =>{
    test('render the light scale', () => {
        render(<CareScale careType='light' scaleValue={1}/>)
        const scaleValue = screen.getByText(/☀️/)
        expect(scaleValue).toBeInTheDocument()      
    })
    test('render the water scale', () => {
        render(<CareScale careType='water' scaleValue={1}/>)
        const scaleValue = screen.getByText(/💧/)
        expect(scaleValue).toBeInTheDocument()      
    })
})