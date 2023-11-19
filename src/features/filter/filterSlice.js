import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inStock: false,
    brands: [],
    keyword: ''

}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleStock: (state) => {
            state.inStock = !state.inStock
        },
        toggleBrand: (state, action) => {
            if (!state.brands.includes(action.payload)) {
                state.brands.push(action.payload)
            } else {
                state.brands = state.brands.filter(brand => brand !== action.payload)
            }

        }
    }
})


export const { toggleStock, toggleBrand } = filterSlice.actions;

export default filterSlice.reducer