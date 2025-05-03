import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "./app/views/Layout.jsx";

// Replace direct imports with lazy imports
const HomePage = lazy(() => import("./app/views/Home.jsx"));
const AboutPage = lazy(() => {
    console.log("Loading AboutPage");
    return import("./app/views/About.jsx")
});
const ContactPage = lazy(() => import("./app/views/Contacts.jsx"));
const ProjectsPage = lazy(() => import("./app/views/Projects.jsx"));


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout><HomePage /></Layout>
        ),
    },
    {
        path: 'about',
        element: (
            <Layout><AboutPage /></Layout>
        ),
    },
    {
        path: 'contacts',
        element: (
            <Layout><ContactPage /></Layout>
        ),
    },
    {
        path: 'projects',
        element: <Layout><ProjectsPage /></Layout>,
    },

]);

export default router;