import React from 'react';
import {render} from 'react-dom';

const ServiceBanner = () => {
    return (
        <div className={'container-fluid w-75 d-flex justify-content-center align-items-center flex-column'}>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-2">
                <p className="text-emphasize-large font-weight-bold mb-4">Products</p>
                <p className="w-50 text-center">
                    From flavorful menu creations to grab-and-go innovations, you won't believe what's being crafted in
                    Cookie Stop ovens. Your guests will love the endless, better-for-you possibilities.
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div id="serve-cookies" className="justify-content-center align-items-center p-5
             flex-column m-5 text-center">
                    <img src="./images/cb01-S.png" className="image-200-200 mt-4"/>
                    <h2 className="font-weight-bold mt-5 mb-3">Cookies</h2>
                    <p className="mb-5">
                        Cookie Stop's cookies are made with so much love that you can feel it in every bite! Not only
                        that.
                        But, these scrumptious pieces of delight are not only good for your taste buds they are also
                        good
                        for your health.
                    </p>
                    <input type="button" value="Cookies"
                           className="form-control-lg text-extra-small rounded-0 border-0 m-2 w-50 font-weight-bold bg-white text-dark"/>
                    <input type="button" value="Download spec sheet"
                           className="form-control-lg text-extra-small rounded-0 border-0 m-2 w-50 font-weight-bold bg-white text-dark"/>
                </div>
                <div id="serve-ice"
                     className="d-flex justify-content-center align-items-center p-5 flex-column m-5 text-center">
                    <img
                        src="https://babcockhalldairystore.wisc.edu/wp-content/uploads/2017/09/Ice-Cream-Sandwich-transparent-background900x600.png"
                        className="image-200-200 mt-4" alt={''}/>
                    <h2 className="font-weight-bold mt-5 mb-3">Cookie Sandwiches</h2>
                    <p className="mb-5">
                        Cookie Stop's cookie sandwiches are the real deal! These cookies are made to redefine delicious
                        and
                        aim to satisfy you with every bite you take. So what are you waiting for? Drop everything, get
                        ready
                        and take a bite!
                    </p>
                    <input type="button" value="Cookie sandwiches"
                           className="form-control-lg text-extra-small rounded-0 border-0 m-2 w-50 font-weight-bold bg-white text-dark"/>
                    <input type="button" value="Download spec sheet"
                           className="form-control-lg text-extra-small rounded-0 border-0 m-2 w-50 font-weight-bold bg-white text-dark"/>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center bg-white m-5">
                <div>
                    <img src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-0.3.5&ixid=
                    eyJhcHBfaWQiOjEyMDd9&s=9962230a1213bfd754ed20ae96114c04&auto=format&fit=crop&w=1350&q=80"
                         className="image-400-200" alt={''}/>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column text-center p-5">
                    <h3 className="font-weight-bold mb-3">Partner with us</h3>
                    <p>
                        Seeking menu inspiration or on-the-go options? Team up with our bakers to bring dynamic,
                        better-for-you flavors to your customers.
                    </p>
                    <input type="button" value="Contact us"
                           className="form-control-lg text-extra-small rounded-0 border-0 m-2 w-50 font-weight-bold bg-dark text-white"/>
                </div>
            </div>
        </div>
    );
};

render(<ServiceBanner/>, document.querySelector('#title-banner'));