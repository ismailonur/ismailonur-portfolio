import React from 'react'
import {
    Header,
    Nav,
    About,
    Experience,
    Services,
    Blog,
    Portfolio,
    Testimonials,
    Contact,
    Footer
} from '../index';

const ldJson = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "İsmail Onur",
    "author": {
        "@type": "Person",
        "name": "İsmail Onur"
    },
    "datePublished": "2022-08-15",
    "dateModified": "2020-08-31",
    "description": "İsmail Onur - Software Engineer, Mobile (React-Native) Developer",
    "images": [
        {
            "@type": "ImageObject",
            "url": "https://www.ismailonur.dev/static/media/me.fa2f07bc15798b9b2ec1.png"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.ismailonur.dev/static/media/me-about.273c5836074045ffe2bb.jpg"
        }
    ],
};

const Main = () => {
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