import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Wishlist from "../pages/Wishlist";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductList from "../pages/Dashboard/ProductList";
import AddProduct from "../pages/Dashboard/AddProduct";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'topRated',
                element: <TopRated />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'wishlist',
                element: <Wishlist />
            },

        ]
    }, {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <ProductList />,
            },
            {
                path: "add-product",
                element: <AddProduct />,
            },
        ],
    },
])
