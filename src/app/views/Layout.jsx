import React, {Suspense, useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getLocale } from "../helpers/localeHandler";
import {useLocation} from "react-router-dom";

const Layout = ({ children }) => {
    const [locale, setLocale] = useState(null);
    const location = useLocation();
    const routeName = location.pathname === '/' ? 'home' : location.pathname.substring(1);
    
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
                <Suspense fallback={<div style={{marginBlock: '2rem'}}>Loading...</div>}>
                    {children && React.cloneElement(children, {
                      pageTranslations: locale.pages[routeName],
                      localeData: locale
                    })}
                </Suspense>
            </div>
            <Footer footerTranslations={locale.footer} />
        </>
    );
};

export default Layout;