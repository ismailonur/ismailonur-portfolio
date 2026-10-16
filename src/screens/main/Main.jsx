import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaGithub, FaGooglePlay, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import T from '../../components/T';
import { useLanguage } from '../../components/languageComp';
import './main.css';

const PROFILE_LINKS = [
    { href: 'https://github.com/ismailonur', label: 'github', Icon: FaGithub },
    { href: 'https://www.linkedin.com/in/ismailonur15/', label: 'linkedin', Icon: FaLinkedin },
    { href: 'mailto:ismailonurdev@gmail.com', label: 'email', Icon: HiOutlineMail },
];

const ETH_STORE_LINKS = [
    { href: 'https://apps.apple.com/us/app/eth-gas-tracker-alerts/id6444177446', label: 'App Store', Icon: FaApple },
    { href: 'https://play.google.com/store/apps/details?id=com.ethereumgastracker', label: 'Google Play', Icon: FaGooglePlay },
];

const externalProps = (href) =>
    href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};

const Main = ({ language }) => {
    const { toggleLang, lang } = useLanguage();

    useEffect(() => {
        if (language) toggleLang(language);
    }, [language, toggleLang]);

    useEffect(() => {
        document.title = lang === 'TR' ? 'İsmail Onur - Yazılım Mühendisi' : 'İsmail Onur - Software Engineer';
        document.documentElement.lang = lang === 'TR' ? 'tr' : 'en';
    }, [lang]);

    return (
        <main className="card-page">
            <Link
                to={lang === 'EN' ? '/tr' : '/en'}
                className="card-page__lang"
                aria-label={lang === 'EN' ? 'Türkçe' : 'English'}
            >
                {lang === 'EN' ? 'TR' : 'EN'}
            </Link>

            <div className="card">
                <h1 className="card__name">İsmail Onur</h1>
                <p className="card__title"><T>software_engineer</T></p>
                <p className="card__intro"><T>intro</T></p>

                <div className="card__links">
                    {PROFILE_LINKS.map(({ href, label, Icon }) => (
                        <a key={href} href={href} className="card__link" {...externalProps(href)}>
                            <Icon aria-hidden="true" />
                            <T>{label}</T>
                        </a>
                    ))}
                </div>

                <div className="card__projects">
                    <h2><T>projects</T></h2>
                    <h3>ETH Gas Tracker &amp; Alerts</h3>
                    <p><T>eth_description</T></p>
                    <div className="card__stores">
                        {ETH_STORE_LINKS.map(({ href, label, Icon }) => (
                            <a key={href} href={href} {...externalProps(href)}>
                                <Icon aria-hidden="true" />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="card-page__footer">© {new Date().getFullYear()} İsmail Onur</footer>
        </main>
    );
};

export { Main };
