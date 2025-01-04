import React from 'react'
import { Routes, Route } from "react-router-dom";

import {
    Main,
    Policy,
    Status404
} from './screens'

import { LanguageProvider } from './components/languageComp';

const policyRoutes = {
    ethereum: 'ethereum_gwei_tracker_privacy_policy',
    biometric: 'biometric_password_protection_privacy_policy',
    twas: 'twas_privacy_policy',
    stickers: 'stickers_for_whatsapp_privacy_policy',
    animals_stickers: 'happy_animalls_sticker_privacy_policy',
    decimal_converter: 'decimal_converter_privacy_policy',
    motolorji_sticker: 'motolorji_sticker_packs_privacy_policy',
    pdf_viewer: 'pdf_viewer_privacy_policy',
};

const App = () => {
    return (
        <LanguageProvider>
            <Routes>
                <Route path="*" element={<Status404 />} />
                <Route path="/" element={<Main />} />
                <Route path="/tr" element={<Main language="TR" />} />
                <Route path="/en" element={<Main language="EN" />} />

                {/* Policy routes */}
                {Object.entries(policyRoutes).map(([key, path]) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Policy title={key} />}
                    />
                ))}
            </Routes>
        </LanguageProvider>
    )
}

export default App