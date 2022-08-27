const lang = require('@serdarakkus/hyper/localization');

const languages = new lang();

languages.set("TR")({
    'hello': 'Merhaba',
    'about_me': 'Ben',
})

languages.set("EN")({
    'hello': 'Hello',
    'about_me': 'About Me',
})

export default languages;