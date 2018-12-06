import React from 'react';

const ProductDescription = ({title, description}) => {
    let self = undefined;
    let MakeActive = () => {
        setTimeout(() => {
            self = !self ? document.querySelector('.product-desc') : undefined;
            self.classList.add('active');
        }, 300)
    };

    return (
        <div className='product-desc d-flex justify-content-center align-items-center flex-column wrap-20'>
            <p className={'text-emphasize-large font-weight-bold color-cookie'}>{title}</p>
            <h4 className={'w-40-100 text-center text-emphasize-small'}>{description}</h4>
            {MakeActive()}
        </div>
    )
};

export default ProductDescription;