// src/App.js
import { useRoutes } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { data, IProduct } from "./utils/data";
import Login from "./Login";

const App = () => {
    const products: IProduct[] = data.data.products;

    console.log(products);

    const routeElements = useRoutes([
        {
            path: "/",
            element: <ProductList products={products} />,
        },
        {
            path: "/product/:id",
            element: <ProductDetail products={products} />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    return <>{routeElements}</>;
};

export default App;
