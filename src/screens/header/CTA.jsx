import React from 'react'

import T from '../../components/T'

const CTA = () => {
    return (
        <div className='cta'>
            {/* <a href={CV} download className='btn'>Download CV</a> */}
            <a className='btn' onClick={() => alert("Coming Soon")}><T>download</T> CV</a>
            <a href="#contact" className='btn btn-primary'><T>lets_talk</T></a>
        </div>
    )
}

export default CTA