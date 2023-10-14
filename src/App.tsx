import {createBrowserRouter, RouterProvider, useLoaderData} from "react-router-dom";

import "./index.css";
import ComingSoon from "./pages/ComingSoon.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        Component() {
            return <ComingSoon/>
        }
    },
    {
        path: "/home",
        loader: () => ({message: "Loading..."}),
        Component() {
            return <HomePage />;
        },
    },
    {
        path: "/test",
        loader: () => ({message: "Hello Data Router!"}),
        Component() {
            const data = useLoaderData() as { message: string };
            return <h1>{data.message}</h1>;
        },
    },
    {
        path: "*",
        Component() {
            return <PageNotFound/>
        }
    },
]);

export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>;
}

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}