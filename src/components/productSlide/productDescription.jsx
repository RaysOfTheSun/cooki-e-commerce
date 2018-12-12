import React from 'react';
import PropTypes from 'prop-types'

const ProductDescription = ({title, description, itemLink, pieceCount}) => {
    let self = undefined;
    let countEnd = pieceCount === 1 ? 'pc.' : 'pcs.';
    let MakeActive = () => {
        setTimeout(() => {
            self = !self ? document.querySelector('.product-desc') : self;
            self.classList.add('active');
        }, 300)
    };

    return (
        <div className={'d-flex justify-content-center align-items-center flex-column'}>
            <div className={'product-desc d-flex justify-content-center align-items-center flex-column wrap-20'}>
                <p className={'text-emphasize-large font-weight-bold color-cookie mb-3'}>{title}</p>
                <h4 className={'w-40-100 text-center text-emphasize-small mt-3 mb-3'}>{description}</h4>
                {MakeActive()}
            </div>
            <div className={'d-flex justify-content-center align-items-center flex-column mb-4'}>
                <div className={'d-flex justify-content-center align-items-center mt-0 mb-4 ' +
                'rounded-circle bg-cookie-brown flex-column p-4'}>
                    <p className={'m-0 text-white px-2'}>{pieceCount}</p>
                    <p className={'m-0 text-extra-small text-white px-2'}>{countEnd}</p>
                </div>
                <div
                    className={'d-flex justify-content-center align-items-center w-100 mt-2 cookie-container flex-mobile-column'}>
                    <a href={itemLink}
                       className={'py-4 px-5 w-300px text-extra-small m-15-5 rounded-0 border-0' +
                       ' font-weight-bold bg-dark text-white text-center'}>See additional info</a>
                    <a href={itemLink}
                       className={'py-4 px-5 w-300px text-extra-small m-15-5 rounded-0 border-0' +
                       ' font-weight-bold bg-dark text-white text-center'}>Download spec sheet</a>
                </div>
            </div>
        </div>
    )
};

ProductDescription.propTypes = {
    title : PropTypes.string,
    description: PropTypes.string,
    itemLink: PropTypes.string,
    pieceCount: PropTypes.number
};

ProductDescription.defaultProps = {
    itemLink: '#',
    pieceCount: 1
};


export default ProductDescription;