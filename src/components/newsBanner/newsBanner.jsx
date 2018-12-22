import React from 'react';
import {render} from 'react-dom';
import TextInputField from '../form/TextInputField.jsx';

const NewsBanner = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center flex-column text-white flex-grow-1'}>
            <p className="text-emphasize-medium font-weight-bold">Sign up for our newsletter</p>
            <div className="my-md-4 my-lg-4 my-sm-2 text-center w-25-70-100">
                <p>Get insider access to news around the innovations, unique cooking techniques, culinary concepts,
                    insights, and more.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-mobile-column">
                <TextInputField usePlaceholder={true} label={'First name'}/>
                <TextInputField usePlaceholder={true} label={'Last name'}/>
                <TextInputField usePlaceholder={true} label={'E-mail Address'}/>
                <TextInputField usePlaceholder={true} label={'State'}/>
                <input type="button"
                       className="btn btn-input-lg btn-light text-extra-small font-weight-bold rounded-0"
                       value="Sign up"/>
            </div>
        </div>
    );
};

render(<NewsBanner/>, document.getElementById('news-banner'));
