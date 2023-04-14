import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';
import { plantList } from '../../data/plantList';

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
    //TODO: test the list rendering watch youtube tuto
    // test('renders "Soldes" if the item isSpecialOffer', () => {
    //     render (<ShoppingList/>);
    // })

})