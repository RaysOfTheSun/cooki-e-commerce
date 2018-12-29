import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({label, name, id, usePlaceholder, size, validationGroup}) => {

    let sizeClass = /* size === 'regular' ? 'form-control-lg' : */ 'text-input-lg';

    if (usePlaceholder) {
        return (
            <input type={'text'} id={id}
                   className={`${sizeClass} rounded-0 bg-transparent text-white border-thin-grey mx-2 m-10-10`}
                   placeholder={label}
                   data-validation-group={validationGroup}/>
        )
    } else {
        return (
            <div className={'d-flex justify-content-center align-self-stretch flex-column m-3'}>
                <label htmlFor={id} className={'caps'}>{label}</label>
                <input type={'text'} id={id} name={name}
                       className={`${sizeClass} rounded-0 bg-transparent text-white border-thin-grey mt-1`}
                       data-validation-group={validationGroup}/>
            </div>
        )
    }
};

TextInputField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    validationGroup: PropTypes.string,
    usePlaceholder: PropTypes.bool
};

TextInputField.defaultProps = {
    size: 'regular'
};

export default TextInputField;