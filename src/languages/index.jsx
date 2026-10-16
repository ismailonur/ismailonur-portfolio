import lang from '@serdarakkus/hyper/localization';

const languages = new lang();

languages.set("TR")({
    "software_engineer": "Yazılım Mühendisi",
    "intro": "Mobil, web, backend ve süreç otomasyonu projelerinde çalışan bir yazılım mühendisiyim.",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "email": "E-posta",
    "projects": "Projeler",
    "eth_description": "Ethereum ve Bitcoin ağlarında işlem ücretlerini izleyip bildirim gönderen mobil uygulama.",
})

languages.set("EN")({
    "software_engineer": "Software Engineer",
    "intro": "I'm a software engineer working on mobile, web, backend and process automation projects.",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "email": "Email",
    "projects": "Projects",
    "eth_description": "Mobile app that tracks Ethereum and Bitcoin network fees and sends alerts.",
})

export default languages;
