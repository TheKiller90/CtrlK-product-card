import React from 'react'
import render from 'react-test-renderer';

import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en <ProductImage />', () => {
    test('Debe mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = render.create(
            <ProductImage img="https://hola.jpg" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar el componente con la imagen del producto', () => {
        const wrapper = render.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});