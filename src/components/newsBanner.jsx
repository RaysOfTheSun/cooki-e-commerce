import React from 'react';
import {render} from 'react-dom';

const NewsBanner = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center flex-column text-white flex-grow-1'}>
            <p className="text-emphasize-medium font-weight-bold">Sign up for our newsletter</p>
            <div className="my-md-4 my-lg-4 my-sm-2 text-center w-25-100">
                <p>Get insider access to news around the innovations, unique cooking techniques, culinary concepts,
                    insights, and more.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-mobile-column">
                <input type="text"
                       className="form-control-lg rounded-0 bg-transparent text-white border-thin-grey mx-2 shrinkable"
                       placeholder="First name"/>
                <input type="text"
                       className="form-control-lg rounded-0 bg-transparent text-white border-thin-grey mx-2 shrinkable"
                       placeholder="Last name"/>
                <input type="text"
                       className="form-control-lg rounded-0 bg-transparent text-white border-thin-grey mx-2 shrinkable"
                       placeholder="E-mail Address"/>
                <input type="text"
                       className="form-control-lg rounded-0 bg-transparent text-white border-thin-grey mx-2 shrinkable"
                       placeholder="State"/>
                <input type="button"
                       className="btn btn-lg btn-light form-control-lg text-extra-small font-weight-bold rounded-0"
                       value="Sign up"/>
            </div>
        </div>
    );
};

render(<NewsBanner/>, document.getElementById('news-banner'));
