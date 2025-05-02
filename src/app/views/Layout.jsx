import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getLocale } from "../helpers/localeHandler";

const Layout = ({ Component, path }) => {
    const [locale, setLocale] = useState(null);
    
    useEffect(() => {
        const fetchLocale = async () => {
            const localeData = await getLocale();
            setLocale(localeData);
        };

        fetchLocale();
    }, []);

    if (!locale) {
        return null; // Or a loading spinner
    }

    return (
        <>
            <Header t={locale.header} />
            <div className="container content">
                <Component t={locale.pages[path.name]} locale={locale} />
            </div>
            <Footer t={locale.footer} />
        </>
    );
};

export default Layout;