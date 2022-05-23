import React from "react";
import PropTypes from 'prop-types';
import cn from "classnames"

const PrimaryButton = ({className, onClick, text}) => {
    return (
        <button className={cn("primary-button", className)} onClick={onClick}>
            {text}
        </button>
    );
};

PrimaryButton.propTypes = {
    isShowArrow: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default PrimaryButton;