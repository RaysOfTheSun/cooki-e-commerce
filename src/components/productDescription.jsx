import React from 'react';

const ProductDescription = ({title, description})=>{
    return (
        <div className={'d-flex justify-content-center align-items-center flex-column product-desc active wrap-20'}>
            <p className={'text-emphasize-large font-weight-bold color-cookie'}>{title}</p>
            <h4 className={'w-40-100 text-center text-emphasize-small'}>{description}</h4>
        </div>
    )
};

export default ProductDescription;