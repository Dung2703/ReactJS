import LayoutDefault from "../React-Router/Layout/LayoutDefault"
import Home from "../React-Router/Pages/Home"
import About from "../React-Router/Pages/About"
import Contact from "../React-Router/Pages/Contact"
import Blog from "../React-Router/Pages/Blog"
import Login from "../React-Router/Pages/Login"
import Error from "../React-Router/Pages/Error"
import PrivateRouter from "../PrivateRouter"
import BlogAll from "../React-Router/Pages/Blog/BlogAll"
import BlogNews from "../React-Router/Pages/Blog/Blognews"
import BlogRelated from "../React-Router/Pages/Blog/Blogrelated"
import BlogDetail from "../React-Router/Pages/Blog/BlogDetail"
import InfoUser from "../React-Router/Pages/InfoUser"

export const Routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/blog",
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />,
                    },
                    {
                        path: "news",
                        element: <BlogNews />,
                    },
                    {
                        path: "related",
                        element: <BlogRelated />,
                    },
                    {
                        path: ":id",
                        element: <BlogDetail />,
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "*",
                element: <Error />,
            },
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: "info-user",
                        element: <InfoUser />
                    }
                ]
            },
        ]
    }

]
