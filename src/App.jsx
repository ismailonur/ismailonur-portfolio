import React from 'react'
import { Routes, Route } from "react-router-dom";

import {
    Main,
    Policy
} from './screens'

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-150454474-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    console.log('====================', TRACKING_ID, 1)

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