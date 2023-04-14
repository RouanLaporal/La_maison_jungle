import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';
import { plantList } from '../../data/plantList';
import CareScale from '../CareScale/CareScale';

describe("ShoppinList component test", () =>{
    
    test('renders the product list', () => {
        render(<ShoppingList />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test('renders the category list', () => {
        render(<ShoppingList />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    // jest.mock('../CareScale/CareScale')

    // test('CareScale mock was called', () => {
    //     render(<ShoppingList />);
    //     expect(CareScale).toHaveBeenCalled()
    // })
    //TODO: test the list rendering watch youtube tuto
    // test('renders "Soldes" if the item isSpecialOffer', () => {
    //     render (<ShoppingList/>);
    // })

})