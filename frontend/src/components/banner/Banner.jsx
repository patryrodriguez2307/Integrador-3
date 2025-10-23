import { ButtonPrimary } from "../buttons";
import { Text } from "../texts";
import "./banner.scss";

const banner = (props) => {

    return (
        <div className="banner">
            <div className="banner__container">
                <Text variant="h1" className="banner__title">Anita Cupcakes</Text>
                <Text variant="p" className="banner__text">Delicias para darte un gusto</Text>
                <ButtonPrimary className="banner__btn" size="sm" onClick={props.onShowProducts}>DESTACADOS...</ButtonPrimary>
            </div>
        </div>
    );
};

export default banner;