import * as iconsSvg from "@/svg";
import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./footer-social-media-item.scss";

const FooterSocialMediaItem = (props) => {
    const { item, className, ...restProps } = props;
    const classes = `footer-social-media-item ${className}`;
    const Svg = iconsSvg[item.svgName];

    return (

        <li className={classes} {...restProps}>
            <Tooltip title={item.Tooltip} arrow>
                <Link to={item.path} target="_blank">
                    <Svg className="footer-social-media-item__icon" />
                </Link>
            </Tooltip>
        </li>
    );
};

FooterSocialMediaItem.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        svgName: PropTypes.string.isRequired,
        Tooltip: PropTypes.string.isRequired,
    }),
    className: PropTypes.string,
};

export default FooterSocialMediaItem;