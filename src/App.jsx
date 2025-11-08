import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";

import { LanguageProvider } from './components/languageComp';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Lazy load screens for better performance
// Note: lazy() requires default exports, so we import and re-export the named exports
const Main = lazy(() => import('./screens/main/Main').then(module => ({ default: module.Main })));
const Policy = lazy(() => import('./screens/policys/Policy').then(module => ({ default: module.Policy })));
const Status404 = lazy(() => import('./screens/status404/Status404').then(module => ({ default: module.Status404 })));

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
        <ErrorBoundary>
            <LanguageProvider>
                <Suspense fallback={<LoadingSpinner fullScreen message="Loading..." />}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/tr" element={<Main language="TR" />} />
                        <Route path="/en" element={<Main language="EN" />} />

                        {/* Policy routes */}
                        {Object.entries(policyRoutes).map(([key, path]) => (
                            <Route
                                key={path}
                                path={`/${path}`}
                                element={<Policy title={key} />}
                            />
                        ))}

                        {/* 404 route should be last */}
                        <Route path="*" element={<Status404 />} />
                    </Routes>
                </Suspense>
            </LanguageProvider>
        </ErrorBoundary>
    )
}

export default App