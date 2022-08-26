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

import { Helmet } from 'react-helmet';

const ldJson = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "İsmail Onur",
    "author": {
        "@type": "Person",
        "name": "İsmail Onur"
    },
    "datePublished": "2022-08-15",
    "dateModified": "2020-08-26",
    "description": "İsmail Onur - Software Engineer - Mobile (React-Native) Developer",
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>İsmail Onur</title>
                <link rel="canonical" href="https://ismailonur.dev" />
                <link rel='shortlink' href='https://ismailonur.dev' />

                <meta name="twitter:card" content="İsmail Onur - Software Engineer" />
                <meta name="twitter:site" content="@ionurdev" />
                <meta name="twitter:creator" content="@ionurdev" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="İsmail Onur - Software Engineer" />
                <meta property="og:site_name" content="İsmail Onur" />
                <meta property="og:description" content="Software Engineer, Mobil (React-Native) Developer" />
                <meta property="og:url" content="https://ismailonur.dev" />
                <meta property="og:locale" content="tr_TR" />

                <script type="application/ld+json">
                    {JSON.stringify(ldJson)}
                </script>
            </Helmet>
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