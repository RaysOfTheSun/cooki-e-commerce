import React from 'react';
import PropTypes from "prop-types";

const SelectInputField = ({label, id, size, options}) => {

    let sizeClass = size === 'regular' ? 'form-control-lg' : 'text-input-lg';
    let opts = options ? ['Select', ...options] : ['Select'];

    return (
        <div className={'d-flex justify-content-center align-self-stretch flex-column m-3'}>
            <label htmlFor={id} className={'caps'}>{label}</label>
            <select id={id}
                    className={`${sizeClass} rounded-0 bg-transparent text-white border-thin-grey mt-1`}>
                {
                    opts.map(item => (
                        <option value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
};

SelectInputField.propTypes = {
    label: PropTypes.string,
    size: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.array
};

SelectInputField.defaultProps = {
    size: 'regular',
};

export default SelectInputField;