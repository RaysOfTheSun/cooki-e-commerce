import React from 'react';
import PropTypes from 'prop-types';

const ProductBannerItem = ({
                               size, title, image, description, primaryButtonText, secondaryButtonText, id,
                               primaryButtonLink, secondaryButtonLink
                           }) => {
    if (size === 'regular') {
        return (
            <div id={id}
                 className='d-flex justify-content-center align-items-center flex-column text-center wrap-20'>
                <img src={image} className='image-200-150 mt-4' alt={title}/>
                <h2 className='font-weight-bold mt-5 mb-3'>{title}</h2>
                <p className='mb-5'>{description}</p>
                <a href={primaryButtonLink} className='form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold bg-white text-dark'>{primaryButtonText}</a>
                <a href={secondaryButtonLink} className='form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold bg-white text-dark'>{secondaryButtonText}</a>
            </div>
        )
    } else {
        return (
            <div id={id}
                 className='container d-flex justify-content-center align-items-center bg-white flex-mobile-column p-0'>
                <div className={'d-flex justify-content-center align-items-center'}>
                    <img src={image} className='image-cover' alt={title}/>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column text-center p-5'>
                    <h3 className='font-weight-bold mb-3'>{title}</h3>
                    <p>{description}</p>
                    <a href={primaryButtonLink} className='form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold bg-dark text-white'>{primaryButtonText}</a>
                </div>
            </div>
        )
    }
};

ProductBannerItem.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    primaryButtonText: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    id: PropTypes.string,
    primaryButtonLink: PropTypes.string,
    secondaryButtonLink: PropTypes.string
};

ProductBannerItem.defaultProps = {
    primaryButtonLink: '#',
    secondaryButtonLink: '#'
};

export default ProductBannerItem;