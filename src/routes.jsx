import {createBrowserRouter} from "react-router-dom";
import HomePage from "./app/views/Home.jsx";
import Layout from "./app/views/Layout.jsx";
import AboutPage from "./app/views/About.jsx";
import ContactPage from "./app/views/Contacts.jsx";
import ProjectsPage from "./app/views/Projects.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout PageComponent={HomePage} routeInfo={'home'} />,
    },
    {
        path: 'about',
        element: <Layout PageComponent={AboutPage} routeInfo={'about'} />,
    },
    {   path: 'contacts',
        element: <Layout PageComponent={ContactPage} routeInfo={'contacts'} />,
    },
    {   path: 'projects',
        element: <Layout PageComponent={ProjectsPage} routeInfo={'projects'} />,
    }
]);

export default router;