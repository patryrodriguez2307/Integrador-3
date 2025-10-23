import { Text } from "@/components/texts";
import { API_URL_IMAGES } from "@/constants/api.constant.js";
import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import "./institution-logo.scss";

const InstitutionLogo = (props) => {
    const { className, ...restProps } = props;
    const classes = `institution-logo ${className ?? ""}`;

    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <div className={classes} {...restProps}>
            {institution?.logo && institution?.name && (
                <>
                    <img
                        className="institution-logo__logo"
                        src={`${API_URL_IMAGES}/institutions/${institution.logo}`}
                        alt="Logo de la institución"/>
                    <Text className="institution-logo__title" variant="h1">{institution.name}</Text>
                </>
            )}
        </div>
    );
};

InstitutionLogo.propTypes = {
    className: PropTypes.string,
};

export default InstitutionLogo;