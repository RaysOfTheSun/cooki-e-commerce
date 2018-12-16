import React from 'react';
import {render} from 'react-dom';
import TextInputField from '../form/TextInputField.jsx';
import SelectInputField from '../form/SelectInputField.jsx';
import TextAreaInputField from '../form/TextAreaInputField.jsx';

const ContactForm = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center flex-mobile-column my-5 mx-3'}>
            <div className={'container d-flex sm-center flex-column mb-5 flex-grow-50-lg no-pointer'}>
                <p className={'text-emphasize-large font-weight-bold mb-4'}>Contact</p>
                <p className={'w-75-100'}>
                    If the need to talk to us arises, never hesitate to tell us about your concerns and
                    how we can better collaborate with one another.
                </p>
            </div>
            <div className={'d-flex justify-content-center flex-column flex-grow-50'} id={'main-form'}>
                <div className={'d-flex justify-content-center flex-mobile-column'}>
                    <TextInputField size={'large'} label={'first name'} id={'first-name'} name={'fname'}/>
                    <TextInputField size={'large'} label={'last name'} id={'last-name'} name={'lname'}/>
                </div>
                <div className={'d-flex justify-content-center flex-mobile-column'}>
                    <TextInputField size={'large'} label={'e-mail address'} id={'mail'} name={'mail'}/>
                    <TextInputField size={'large'} label={'company/organization'} id={'company-org'}
                                    name={'companyOrg'}/>
                </div>
                <div className={'d-flex justify-content-center flex-mobile-column'}>
                    <TextInputField size={'large'} label={'state'} id={'state'} name={'state'}/>
                    <SelectInputField size={'large'} label={'topic'} id={'topic'} options={['Cookie Bar', 'Genius Bar',
                        'Product', 'Menu Development']}/>
                </div>
                <div className={'d-flex justify-content-center flex-mobile-column'}>
                    <TextAreaInputField id={'message-box'} name={'message'}
                                        label={'Which distributors service your business?'}
                                        size={'large'} usePlaceholder={false}/>
                </div>
                <input type={'button'} className={`form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold align-self-center m-5`} value={'Send the message'}/>
            </div>
        </div>
    )
};

render(<ContactForm/>, document.querySelector('#contact-form'));

