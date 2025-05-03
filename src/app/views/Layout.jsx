import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getLocale } from "../helpers/localeHandler";

const Layout = ({ PageComponent, routeInfo }) => {
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
            <Header headerTranslations={locale.header} />
            <div className="container content">
                <PageComponent pageTranslations={locale.pages[routeInfo]} localeData={locale} />
            </div>
            <Footer footerTranslations={locale.footer} />
        </>
    );
};

export default Layout;