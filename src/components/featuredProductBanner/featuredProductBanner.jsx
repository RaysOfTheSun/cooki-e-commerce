import React from 'react';
import {render} from 'react-dom';

const FeaturedProductBanner = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center flex-mobile-column w-100'}>
            <div className="text-white text-center w-25-70-100 order-1">
                <p className="text-emphasize-medium font-weight-bold">Cookies you will surely love</p>
                <p className="text-muted mt-4">Some cookies are made for a special reason</p>
                <input type="button"
                       className="btn btn-lg btn-light p-3 px-4 mt-3 text-extra-small rounded-0 font-weight-bold"
                       value="See Our Cookie Sandwiches"/>
            </div>
            <img src="https://i.imgur.com/YKwGPRd.png"
                 className="image-350-270 mx-5"/>
        </div>
    );
};

render(<FeaturedProductBanner/>, document.getElementById(('product-banner')));