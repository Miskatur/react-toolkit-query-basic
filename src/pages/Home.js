import React from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand, toggleStock } from "../features/filter/filterSlice";
import { useGetProductsQuery } from "../features/api/apiSlice";

const Home = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError } = useGetProductsQuery()
    const products = data?.products;
    const brands = useSelector(state => state.filter.brands)
    const inStock = useSelector(state => state.filter.inStock)
    const activeClass = "text-white  bg-indigo-500 border-white";

    let content;

    if (isLoading) {
        content = <div className="flex justify-center items-center h-screen">
            <p className="text-sm">loading</p>
        </div>
    }
    if (isError) {
        content = <div className="flex justify-center items-center h-screen">
            <p className="text-sm">
                something went wrong
            </p>
        </div>
    }

    if (products?.length) {
        content = <div className='grid grid-cols-3 gap-5 py-6 px-10'>

            {
                products?.map((product) =>
                    <ProductCard
                        key={product?._id}
                        product={product}
                    />)
            }
        </div>
    }
    if (products?.length && (inStock || brands?.length)) {
        content = <div className='grid grid-cols-3 gap-5 py-6 px-10'>
            {
                products?.filter((product) => {
                    if (inStock) {
                        return product?.status === true
                    }
                    return product
                })?.filter((product) => {
                    if (brands?.length) {
                        return brands?.includes(product?.brand)
                    }
                    return product
                }).map((product) =>
                    <ProductCard
                        key={product?._id}
                        product={product}
                    />)
            }
        </div>
    }


    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    className={` border px-3 py-2 rounded-full font-semibold ${inStock && activeClass} `}
                    onClick={() => dispatch(toggleStock())}
                >
                    In Stock
                </button>
                <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') && activeClass}`} onClick={() => dispatch(toggleBrand('amd'))}>
                    AMD
                </button>
                <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') && activeClass}`}
                    onClick={() => dispatch(toggleBrand('intel'))}>
                    Intel
                </button>
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {products?.map((product) => (
                    <ProductCard key={product?.model} product={product} />
                ))}
            </div> */}
            <div>
                {content}
            </div>
        </div>
    );
};

export default Home;