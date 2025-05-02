import React, {Suspense} from "react";
import routes from "./app/consts/routes.js";
import loadCssFile from "./app/helpers/loadCssFile.js";
import startTitleAnimation from "./app/helpers/startTitleAnimation.js";
import replacePath from "./app/helpers/replacePath.js";
import localeHandler from "./app/helpers/localeHandler.js";
import Layout from "./app/views/Layout.jsx";
import "./styles/styles.sass";

const App = () => {
    const [Component, setComponent] = React.useState(null);
    const [path, setPath] = React.useState(routes[window.location.pathname] ?? routes["/404"]);
    React.useEffect(() => {
        const loadComponent = async () => {
            loadCssFile(path.name);
            startTitleAnimation(path.name);
            const module = await import(`./app/views/${path.element}`);
            setComponent(() => module.default);
        };

        replacePath().then(() => {
            loadComponent();
            localeHandler();
        });
    }, []);
    return <Suspense fallback={<div>Loading...</div>}>
        {Component ? <Layout Component={Component} path={path} /> : null}
    </Suspense>;
};

export default App;