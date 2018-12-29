import React, {Component} from 'react';
import {render} from 'react-dom';
import TextInputField from '../form/TextInputField.jsx';

class NewsletterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {registered: false};
        this.onsubmit = this.onsubmit.bind(this);
        this.unreg = (
            <div className={'d-flex justify-content-center flex-column flex-grow-50'} id={'main-form'}>
                <div className={'d-flex justify-content-center flex-mobile-column'}>
                    <TextInputField size={'large'} label={'first name'} id={'first-name'} name={'fname'}
                                    validationGroup={'mail'}/>
                    <TextInputField size={'large'} label={'last name'} id={'last-name'} name={'lname'}
                                    validationGroup={'mail'}/>
                </div>
                <div className={'d-flex justify-content-center flex-mobile-column'}>
                    <TextInputField size={'large'} label={'e-mail address'} id={'mail'} name={'mail'}
                                    validationGroup={'mail'}/>
                    <TextInputField size={'large'} label={'state'} id={'state'} name={'state'}
                                    validationGroup={'mail'}/>
                </div>
                <input type={'submit'} className={`form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold align-self-center m-5`} value={'Sign up'} onClick={this.onsubmit}/>
            </div>
        );
        this.reg = (
            <div className={'d-flex justify-content-center flex-column flex-grow-50'} id={'main-form'}
                 style={{height: '585px'}}>
                <h3>Thank you for registering!</h3>
                <a className={`form-control form-control-lg p-3 w-40-70 text-extra-small m-2 rounded-0 border-0
                        font-weight-bold align-self-center m-5 text-center text-dark text-plain`} href={'/'}>{'Take me home'}</a>
            </div>
        )
    }

    async onsubmit(e) {
        e.preventDefault();
        // grab all the input fields within the same validation-group
        const fields = document.querySelectorAll('input[type=text][data-validation-group=mail]');
        let fieldValidity = [];
        let isValid = true;
        // see if all the fields have content
        for (let i = 0; i < fields.length; i++) {
            fieldValidity.push(fields[i].value !== '');
        }

        fieldValidity.forEach((el, i) => {
            if (!el) {
                fields[i].style.borderColor = 'red';
                isValid = false;
            } else {
                fields[i].style.borderColor = '';
            }
        });

        if (isValid) {
            // The e-mail address of the user
            const email = fields[2].value;
            // send our post request to the server
            await fetch('/newsletter/newsletter-signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({mail: email})
            });
            this.setState({registered: true});
        }
    };

    render() {
        return (
            <div className={'d-flex justify-content-center align-items-center flex-mobile-column my-5 mx-3'}>
                <div className='container d-flex sm-center flex-column mb-5 flex-grow-50-lg no-pointer'>
                    <p className='text-emphasize-large font-weight-bold mb-4'>Newsletter signup</p>
                    <p className='w-75-100'>
                        Get insider access to news about innovations, unique baking techniques, baking concepts,
                        insights and more.
                    </p>
                </div>
                {!this.state.registered ? this.unreg : this.reg}
            </div>
        )
    }

}

render(<NewsletterForm/>, document.querySelector('#news-form'));