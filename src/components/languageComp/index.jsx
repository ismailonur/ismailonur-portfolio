import React, { useContext, useState } from "react"

import languages from "../../languages/index.jsx";

const LanguageContext = React.createContext();

const LanguageProvider = (props) => {
    const [lang, setLang] = useState("EN");

    const toggleLang = (language) => {
        if(language){
            setLang(language);
            return;
        }
        if (lang === "EN")
            setLang("TR");
        else
            setLang("EN");
    }

    const translate = (key) => {
        return languages.translate(lang)(key);
    }

    return <LanguageContext.Provider
        value={{ toggleLang, translate, lang }}
    >
        {props.children}
    </LanguageContext.Provider>
}

const useLanguage = () => {
    const { toggleLang, translate, lang } = useContext(LanguageContext);
    return { toggleLang, translate, lang };
}

export {
    LanguageProvider,
    useLanguage
}