import React from 'react';
import PropTypes from 'prop-types';

const TextAreaInputField = ({label, name, id, usePlaceholder, size}) => {

    let sizeClass = size === 'regular' ? 'form-control-lg' : 'text-input-lg';

    return (
        <div className={'d-flex justify-content-center flex-column m-3 flex-grow-1'}>
            <label htmlFor={id} className={'caps'}>{label}</label>
            <textarea id={id}
                      className={`${sizeClass} rounded-0 bg-transparent text-white border-thin-grey
                      w-100 align-self-stretch mt-1`}/>
        </div>
    )
};

TextAreaInputField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    usePlaceholder: PropTypes.bool
};

TextAreaInputField.defaultProps = {
    size: 'regular'
};

export default TextAreaInputField;