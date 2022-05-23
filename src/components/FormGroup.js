import React from "react";
import PropTypes from 'prop-types';
import cn from "classnames"

const FormGroup = ({label, className, onClick, isHideLabel, isShowSelect, isShowInput}) => {

    return (
        <div className={cn("form-group", className)}>
            {!isHideLabel &&
                <label htmlFor="manager">{label}</label>
            }
            {isShowSelect &&
                <select name="manager" id="manager">
                    <option value="volvo">Army Carlson</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            }
            {isShowInput &&
                <input type="text" id="" name=""/>
            }
        </div>
    );
};

FormGroup.propTypes = {
    isHideLabel: PropTypes.string,
    isShowInput: PropTypes.string,
    isShowSelect: PropTypes.string,
    text: PropTypes.string,
    icSrc: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default FormGroup;