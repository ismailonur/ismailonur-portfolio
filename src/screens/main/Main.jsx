import {
    Header,
    Nav,
    About,
    Experience,
    Blog,
    Portfolio,
    Contact,
    Footer
} from '../index';

import { useLanguage } from '../../components/languageComp';
import { useEffect } from 'react';

const Main = (props) => {
    const { toggleLang } = useLanguage();
    useEffect(() => {
        if (props.language)
            toggleLang(props.language);
        if (props.language === "TR")
            document.title = "İsmail Onur - Yazılım Mühendisi";
        if (props.language === "EN")
            document.title = "İsmail Onur - Software Engineer";
    }, [props.language, toggleLang]);

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            {/* <Services /> */}
            <Blog />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    )
}

export { Main }