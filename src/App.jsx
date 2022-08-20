import React from 'react'
import { Routes, Route } from "react-router-dom";

import {
    Main,
    Policy
} from './screens'

import ReactGA from 'react-ga';
const TRACKING_ID = "G-72WNMQ659H";
ReactGA.initialize(TRACKING_ID);

const App = () => {
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