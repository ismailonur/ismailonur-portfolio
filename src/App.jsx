import React from 'react'
import { Routes, Route } from "react-router-dom";

import {
    Main,
    Policy
} from './screens'

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