import React from 'react';
import {render} from 'react-dom';

const Navbar = () => {

    const makeActive = (loc) => {

        if (location.pathname === '/' && loc === '/') {
            return 'active';
        } else if (location.pathname.replace('/', '').startsWith(loc)) {
            return 'active';
        }

        return '';
    };

    return (
        <div className='container-fluid mr-5 ml-5'>
            <button className={'navbar-toggler'} type={'button'} data-toggle={'collapse'} data-target={'.dual-nav'}>
                <span className={'navbar-toggler-icon'}></span>
            </button>
            <a href={'/'}
               className='navbar-brand mx-auto d-block text-center order-lg-0 order-md-0 order-xl-1 w-25 text-cookie text-emphasize-medium font-weight-bold'>Cookie
                Stop</a>
            <div className={'navbar-collapse collapse dual-nav w-50 order-1 order-md-0'}>
                <ul className={'navbar-nav'}>
                    <li className={`nav-item ${makeActive('/')}`}>
                        <a className={'nav-link pb-lg-4 pb-md-4 pt-md-4 pt-lg-4 pb-sm-2 pt-sm-2'} href='/'>Home</a>
                    </li>
                    <li className={`nav-item ${makeActive('products')}`}>
                        <a className={'nav-link pb-lg-4 pb-md-4 pt-md-4 pt-lg-4 pb-sm-2 pt-sm-2'}
                           href={'/products'}>Products</a>
                    </li>
                    <li className={`nav-item ${makeActive('collaboration')}`}>
                        <a className={'nav-link pb-lg-4 pb-md-4 pt-md-4 pt-lg-4 pb-sm-2 pt-sm-2'}
                           href={'/collaboration'}>Collaboration</a>
                    </li>
                </ul>
            </div>
            <div className={'navbar-collapse collapse dual-nav w-50 order-2'}>
                <ul className={'nav navbar-nav ml-auto'}>
                    <li className={`nav-item ${makeActive('contact')}`}>
                        <a className={'nav-link pb-lg-4 pb-md-4 pt-md-4 pt-lg-4 pb-sm-2 pt-sm-2'}
                           href={'/contact'}>Contact</a></li>
                    <li className={`nav-item ${makeActive('newsletter')}`}>
                        <a className={'nav-link pb-lg-4 pb-md-4 pt-md-4 pt-lg-4 pb-sm-2 pt-sm-2'}
                           href={'/newsletter'}>Newsletter</a></li>
                    <li className={`nav-item ${makeActive('trending')}`}>
                        <a className={'nav-link pb-lg-4 pb-md-4 pt-md-4 pt-lg-4 pb-sm-2 pt-sm-2'}
                           href={'/trending'}>What's trending</a></li>
                </ul>
            </div>
        </div>
    );
}

render(<Navbar/>, document.getElementById('notch'));
