import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1',
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products/all"
            }),
            providesTags: ["Products"]
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products/create",
                body: data,
                method: "POST",
            }),
            invalidatesTags: ["Products"]
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/products/remove/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"]
        })
    })
})

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useRemoveProductMutation
}
    = productApi;