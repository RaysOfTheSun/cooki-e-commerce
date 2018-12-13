import React from 'react';
import PropTypes from 'prop-types';

const ProductBannerItem = ({
                               style, title, image, description, orientation, imagePosition, primaryButtonText, secondaryButtonText, id,
                               primaryButtonLink, secondaryButtonLink, buttonColor
                           }) => {
    let imgPosClass = imagePosition === 'top' ? 'order-0' : 'order-1-0';
    let descBoxPosClass = imgPosClass === 'order-0' ? 'order-1' : 'order-0';
    let orientationClass = orientation === 'landscape' ? 'flex-mobile-column' : 'flex-column';
    let buttonClass = buttonColor === 'light' ? 'bg-white text-dark' : 'bg-dark text-white';

    if (style === 'card') {
        return (
            <div id={id}
                 className='d-flex justify-content-center align-items-center flex-column text-center wrap-20'>
                <img src={image} className='image-200-150 mt-4' alt={title}/>
                <h2 className='font-weight-bold mt-5 mb-3'>{title}</h2>
                <p className='mb-5'>{description}</p>
                <a href={primaryButtonLink} className={`form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold ${buttonClass}`}>{primaryButtonText}</a>
                <a href={secondaryButtonLink} className={`form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold ${buttonClass}`}>{secondaryButtonText}</a>
            </div>
        )
    } else if (style === 'default') {
        return (
            <div id={id}
                 className={`container d-flex justify-content-center align-items-center bg-white ${orientationClass} p-0`}>
                <div className={`d-flex justify-content-center align-items-center ${imgPosClass}`}>
                    <img src={image} className='image-cover' alt={title}/>
                </div>
                <div
                    className={`d-flex justify-content-center align-items-center flex-column text-center p-5 desc-box ${descBoxPosClass}`}>
                    <h3 className='font-weight-bold mb-3'>{title}</h3>
                    <p>{description}</p>
                    <a href={primaryButtonLink} className={`form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold ${buttonClass}`}>{primaryButtonText}</a>
                </div>
            </div>
        )
    }
};

ProductBannerItem.propTypes = {
    style: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    imagePosition: PropTypes.string,
    orientation: PropTypes.string,
    description: PropTypes.string,
    primaryButtonText: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    id: PropTypes.string,
    primaryButtonLink: PropTypes.string,
    secondaryButtonLink: PropTypes.string,
    buttonColor: PropTypes.string
};

ProductBannerItem.defaultProps = {
    primaryButtonLink: '#',
    secondaryButtonLink: '#',
    style: 'default',
    orientation: 'landscape',
    imagePosition: 'top',
    buttonColor: 'dark'
};

export default ProductBannerItem;