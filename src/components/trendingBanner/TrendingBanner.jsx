import React from 'react';
import {render} from 'react-dom';
import ProductBannerItem from '../productsBanner/productBannerItem.jsx';

const TrendingBanner = () => {
    const titles = {
        swap: 'Offer better-for-you simple swaps',
        flavor: 'The power of a rather desirable flavor',
        sweet: 'Indulge in a truly guiltless pleasure'
    };
    const descriptions = {
        swap: 'Our cookies are the perfect option for delivering on great taste and various health benefits. ' +
            'Your menu can do it all with these healthy replacements.',
        flavor: 'With the power of our cookies\' amazing balance of sweetness and everything else great, your customers ' +
            'will surely be satisfied with our cookies! So what are you waiting for, head right into our fantastic ' +
            'recipes.',
        sweet: 'Cookie Stop\'s cookies are not just sweet. They are also 100% healthy! Let your taste buds embark on a ' +
            'truly guiltless endeavor with our classic cookies and mesmerizing cookie sandwiches!'
    };
    return (
        <div className={'d-flex justify-content-center align-items-middle flex-column my-5 mx-3'}>
            <div className="container d-flex justify-content-center align-items-center flex-column mb-5">
                <p className="text-emphasize-large font-weight-bold mb-4">What's trending</p>
                <p className="w-40-70-100 text-center">Find out what’s going on in the world of good food.</p>
            </div>
            <ProductBannerItem
                orientation={'landscape'}
                style={'default'}
                image={'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=' +
                'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
                primaryButtonText={'Compare Ingredients'}
                title={titles.swap}
                description={descriptions.swap}
                buttonColor={'light'}
                id={'top-banner'}
            />
            <ProductBannerItem
                orientation={'landscape'}
                imagePosition={'bottom'}
                style={'default'}
                image={'https://images.unsplash.com/photo-1428895009712-de9e58a18409?ixlib=' +
                'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
                primaryButtonText={'Read more'}
                title={titles.flavor}
                description={descriptions.flavor}
                buttonColor={'light'}
                id={'middle-banner'}
            />
            <ProductBannerItem
                orientation={'landscape'}
                style={'default'}
                image={'https://images.unsplash.com/photo-1502124225665-6282a0146f6a?ixlib=' +
                'rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                primaryButtonText={'Read more'}
                title={titles.sweet}
                description={descriptions.sweet}
                buttonColor={'light'}
                id={'bottom-banner'}
            />
        </div>
    )
};

render(<TrendingBanner/>, document.querySelector('#trending-banner'));