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