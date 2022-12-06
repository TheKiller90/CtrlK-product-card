import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('Pruebas en <ProductTitle />', () => {
    test('Debe mostrar el componente correctamente con el título personalizado', () => {
        const wrapper = render.create(
            <ProductTitle title='Custom Product' className='custom-class' />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard product={ product }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});