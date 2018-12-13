import React from 'react';
import {render} from 'react-dom';
import ProductBannerItem from '../productsBanner/productBannerItem.jsx';

const CollaborationBanner = () => {

    let descriptions = {
      bar: 'Stocked with your favorite cookies and cookie sandwiches, ' +
          'give customers immediate access to better-for-you food ' +
          'options in stores and on campuses.',
      menu: 'Our cookies are more than just a collection of sweet and healthy ' +
          'ingredients; they are also made with utmost love and care for the customer. ' +
          'With the guidance of our in-house bakers, we\'ll develop ways to make cookies an ' +
          'essential part of your menu.',
      market: 'The food industry is ever-evolving. Draw customers in with publicity and keep them up to date with ' +
          'product information that meets them right at store level.',
      genius: 'Give your customers a chance to craft their own sweet, healthy and scrumptious cookies! Let them craft' +
          ' an experience they will never forget with our genius bar.'
    };

    return (
        <div className={'d-flex justify-content-center align-items-middle flex-column my-5 mx-3'}>
            <div className="container d-flex justify-content-center align-items-center flex-column mb-5">
                <p className="text-emphasize-large font-weight-bold mb-4">Collaboration</p>
                <p className="w-40-70-100 text-center">
                    Let’s make something good together. Team up with us and get the great-tasting tools you need
                    to breathe life into your business.
                </p>
            </div>
            <ProductBannerItem
                orientation={'landscape'}
                style={'default'}
                image={'https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-0.3.5&ixid=' +
                'eyJhcHBfaWQiOjEyMDd9&s=9962230a1213bfd754ed20ae96114c04&auto=format&fit=crop&w=1350&q=80'}
                primaryButtonText={'Contact us'}
                title={'Cookie Bar'}
                description={descriptions.bar}
                buttonColor={'light'}
                id={'top-collab-banner'}
            />
            <div className={'container d-flex justify-content-center align-items-middle flex-mobile-column px-0'}>
                <ProductBannerItem
                    orientation={'portrait'}
                    style={'default'}
                    image={'https://images.unsplash.com/photo-1510545724575-ca1a01b0cd1e?ixlib=' +
                    'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
                    primaryButtonText={'Contact us'}
                    title={'Menu Development'}
                    description={descriptions.menu}
                    buttonColor={'light'}
                    id={'left-collab-banner'}
                />
                <ProductBannerItem
                    orientation={'portrait'}
                    style={'default'}
                    imagePosition={'bottom'}
                    image={'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&ixid=' +
                    'eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
                    primaryButtonText={'Contact us'}
                    title={'Point of purchase marketing'}
                    description={descriptions.market}
                    buttonColor={'light'}
                    id={'right-collab-banner'}
                />
            </div>
            <ProductBannerItem
                orientation={'landscape'}
                style={'default'}
                image={'https://images.unsplash.com/photo-1544176617-c3fade1ffa26?ixlib=' +
                'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
                imagePosition={'bottom'}
                primaryButtonText={'Contact us'}
                title={'Genius Bar'}
                description={descriptions.genius}
                id={'bottom-collab-banner'}
            />
        </div>
    )
};

render(<CollaborationBanner/>, document.querySelector('#collab-banner'));
