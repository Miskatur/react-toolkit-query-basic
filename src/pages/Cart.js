import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Cart = () => {

    const { cart } = useSelector(state => state.cart)
    console.log(cart);



    return (
        <div className='mt-10 grid grid-cols-3 gap-5 '>
            {
                cart?.map((product, index) =>
                    <ProductCard
                        product={product}
                        key={index}
                    />
                )
            }
        </div>
    );
};

export default Cart;