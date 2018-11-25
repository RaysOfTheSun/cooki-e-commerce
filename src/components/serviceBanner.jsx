import React from 'react';
import {render} from 'react-dom';

const ServiceBanner = ()=>{
  const services = [
      {
          name: 'Cookies',
          desc: 'Cookie Stop\'s cookies are made with so much love that you can feel it in every bite! Not only that. ' +
              'But, these scrumptious pieces of delight are not only good for your taste buds they are also good ' +
              'for your health.',
          image: './images/cb01-S.png'
      },
      {
          name: 'Cookie Sandwiches',
          desc: 'Cookie Stop\'s cookie sandwiches are the real deal! These cookies are made to redefine delicious and '
          + 'aim to satisfy you with every bite you take. So what are you waiting for? Drop everything, get ready ' +
              'and take a bite!',
          image: 'https://babcockhalldairystore.wisc.edu/wp-content/uploads/2017/09/Ice-Cream-Sandwich-transparent-' +
              'background900x600.png'
      },
      {
          name: 'Partner with us',
          desc: 'Seeking menu inspiration or on-the-go options? Team up with our bakers to bring dynamic, ' +
              'better-for-you flavors to your customers.',
          image:  'https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-0.3.5&ixid=' +
              'eyJhcHBfaWQiOjEyMDd9&s=9962230a1213bfd754ed20ae96114c04&auto=format&fit=crop&w=1350&q=8'
      }
  ];
};