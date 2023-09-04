import React from "react";
import renderer from "react-test-renderer";
import { ProductImage, ProductCard } from '../../src/components';
import { product1, product2 } from "../data/product";


describe('ProductImage', () => {

    test('debe de mostrar el componente correctamente con la imagen personaliza', () => {

        const wrapper = renderer.create(
            <ProductImage img="custom-class" />
        )

        // console.log( wrapper.toJSON() );
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });


    test('debe de mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
})