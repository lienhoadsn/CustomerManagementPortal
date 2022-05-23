import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import images from "../themes/images";

const NaviBar = ({icSrc, className, onClick, text, isShowArrow, isHideText}) => {

    return (
        <Link to="" onClick={onClick} className={className}>
            <span className='icon'><img src={icSrc} alt="icon"/></span>
            {!isHideText &&
                <span>{text}</span>
            }
            {isShowArrow &&
                <span className='arrowDown'><img src={images.arrowDown} alt="arrowDown"/></span>
            }
        </Link>
    );
};

NaviBar.propTypes = {
    isHideText: PropTypes.string,
    isShowArrow: PropTypes.string,
    text: PropTypes.string,
    icSrc: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default NaviBar;