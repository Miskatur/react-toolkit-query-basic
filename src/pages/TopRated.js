// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import { useProducts } from '../context/ProductProvider';

const TopRated = () => {
//     const { state } = useProducts()
//     const { products, loading, error } = state;
//     let content;

//     if (loading) {
//         content = <div className='flex justify-center items-center w-full'>
//             <p className='text-sm'> Loading on going ...</p>
//         </div>
//     }
//     if (error) {
//         content = <div className='flex justify-center items-center w-full'>
//             <p className='text-sm'> Something went  ...</p>
//         </div>
//     }
//     if (!loading && !error && products?.length === 0) {
//         content =
//             <div className='flex justify-center items-center w-full'>
//                 <p className='text-sm'> No product available</p>
//             </div>

//     }
//     if (!loading && !error && products?.length) {
//         content = <div className='grid grid-cols-3 gap-5 px-20'>
//             {
//                 products?.filter((r => r?.rating >= 4)).map((product, index) =>
//                     <ProductCard
//                         product={product}
//                         key={index}
//                     />
//                 )
//             }

//         </div>
//     }


    return (
        <div className='mt-10 '>
           {/* {content} */}
        </div>
    );
};

export default TopRated;