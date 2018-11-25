import React from 'react';
import {render} from 'react-dom';

const ProductBanner = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center flex-mobile-column w-100'}>
            <div className="text-white text-center w-25-70-100 order-1">
                <p className="text-emphasize-medium font-weight-bold">Cookies you will surely love</p>
                <p className="text-muted mt-4">Some cookies are made for a special reason</p>
                <input type="button"
                       className="btn btn-lg btn-light p-3 px-4 mt-3 text-extra-small rounded-0 font-weight-bold"
                       value="See Our Cookie Sandwiches"/>
            </div>
            <img src="http://cdn.shopify.com/s/files/1/0713/2387/products/Thick_Mint_grande.png?v=1537559462"
                 className="image-350-270 mx-5"/>
        </div>
    );
};

render(<ProductBanner/>, document.getElementById(('product-banner')));