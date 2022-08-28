import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import {
    Main,
    Policy,
    Status404
} from './screens'

import { LanguageProvider } from './components/languageComp';

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-150454474-1";

const App = () => {
    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <LanguageProvider>
            <Routes>
                <Route path="*" element={<Status404 />} />
                <Route path="/" element={<Main />} />
                <Route path="ethereum_gwei_tracker_privacy_policy" element={<Policy title={"ethereum"} />} />
                <Route path="biometric_password_protection_privacy_policy" element={<Policy title={"biometric"}/>} />
                <Route path="twas_privacy_policy" element={<Policy title={"twas"}/>} />
                <Route path="happy_animalls_sticker_privacy_policy" element={<Policy title={"animals_stickers"}/>} />
                <Route path="stickers_for_whatsapp_privacy_policy" element={<Policy title={"stickers"}/>} />
                <Route path="decimal_converter_privacy_policy" element={<Policy title={"decimal_converter"}/>} />
                <Route path="motolorji_sticker_packs_privacy_policy" element={<Policy title={"motolorji_sticker"}/>} />
            </Routes>
        </LanguageProvider>
    )
}

export default App