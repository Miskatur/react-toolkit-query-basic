import React from 'react';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
    // let content;

    // if (loading) {
    //     content = <div className='flex justify-center items-center w-full'>
    //         <p className='text-sm'> Loading on going ...</p>
    //     </div>
    // }
    // if (error) {
    //     content = <div className='flex justify-center items-center w-full'>
    //         <p className='text-sm'> Something went  ...</p>
    //     </div>
    // }
    // if (!loading && !error && wishlist?.length === 0) {
    //     content =
    //         <div className='flex justify-center items-center w-full'>
    //             <p className='text-sm'> No product available</p>
    //         </div>

    // }
    // if (!loading && !error && wishlist?.length) {
    //     content = <div className='grid grid-cols-3 gap-5 px-20'>
    //         {
    //             wishlist?.map((product, index) =>
    //                 <ProductCard
    //                     product={product}
    //                     key={index}
    //                 />
    //             )
    //         }

    //     </div>
    // }


    return (
        <div className='mt-10 grid grid-cols-3 gap-5'>
            {/* {content} */}
            {/* {
                wishlist?.map((product, index) =>
                    <ProductCard
                        product={product}
                        key={index}
                    />
                )
            } */}
        </div>
    );
};

export default Wishlist;