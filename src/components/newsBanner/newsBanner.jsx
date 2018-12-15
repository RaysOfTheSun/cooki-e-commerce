import React from 'react';
import {render} from 'react-dom';
import InputField from '../form/inputField.jsx';

const NewsBanner = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center flex-column text-white flex-grow-1'}>
            <p className="text-emphasize-medium font-weight-bold">Sign up for our newsletter</p>
            <div className="my-md-4 my-lg-4 my-sm-2 text-center w-25-70-100">
                <p>Get insider access to news around the innovations, unique cooking techniques, culinary concepts,
                    insights, and more.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-mobile-column">
                <InputField usePlaceholder={true} label={'First name'}/>
                <InputField usePlaceholder={true} label={'Last name'}/>
                <InputField usePlaceholder={true} label={'E-mail Address'}/>
                <InputField usePlaceholder={true} label={'State'}/>
                <input type="button"
                       className="btn btn-lg btn-light form-control-lg text-extra-small font-weight-bold rounded-0"
                       value="Sign up"/>
            </div>
        </div>
    );
};

render(<NewsBanner/>, document.getElementById('news-banner'));
