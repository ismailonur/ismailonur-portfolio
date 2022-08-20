import React from 'react'
import { Routes, Route } from "react-router-dom";

import {
    Main,
    Policy
} from './screens'

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-150454474-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
    console.log('====================', TRACKING_ID)
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="ethereum_gwei_tracker_privacy_policy" element={<Policy />} />
            </Routes>
        </>
    )
}

export default App