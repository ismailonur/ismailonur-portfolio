import { useLanguage } from '../languageComp';

const T = (props) => {
    const { translate } = useLanguage();
    return (
        translate(props.children)
    )
}

export default T