import React from "react";
import PropTypes from 'prop-types';
import cn from "classnames"

const StatusButton = ({number, className, onClick, text}) => {
    return (
        <div className={cn("status-button", className)} onClick={onClick}>
            <span>{text}</span>
            <span>{number}</span>
        </div>
    );
};

StatusButton.propTypes = {
    isShowArrow: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default StatusButton;