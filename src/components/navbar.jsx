import React from 'react';
import {render} from 'react-dom'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 'home'};
        this.makeActive = this.makeActive.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e){
        let target = e.target;
        let currActive = document.querySelector('li.nav-item.active');
        currActive.classList.toggle('active');
        this.setState({active: target.getAttribute('data-loc')}, ()=>{
            localStorage.setItem('active', this.state.active);
        });
    }

    makeActive(target){
        if(localStorage.getItem('active') === target){
            return 'active';
        }

        return '';
    }

    render() {
        return (
            <div className="container-fluid mr-5 ml-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0 ">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${this.makeActive('home')}`}>
                            <a className="nav-link pb-4 pt-4" href="/index" data-loc={'home'} onClick={this.clickHandler}>Home</a>
                        </li>
                        <li className={`nav-item ${this.makeActive('products')}`}>
                            <a className="nav-link pb-4 pt-4" href="/products" data-loc={'products'} onClick={this.clickHandler}>Products</a>
                        </li>
                        <li className={`nav-item ${this.makeActive('services')}`}>
                            <a className="nav-link pb-4 pt-4" href="#" data-loc={'services'} onClick={this.clickHandler}>Services</a>
                        </li>
                    </ul>
                </div>
                <a href="/"
                   className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25 text-cookie text-emphasize-medium font-weight-bold">Cookie
                    Stop</a>
                <div className="navbar-collapse collapse dual-nav w-50 order-2">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link pb-4 pt-4" href=""><i
                            className="fas fa-user"></i></a></li>
                        <li className="nav-item" id={'cart-button'}><a className="nav-link pb-4 pt-4" href={'#'}><i
                            className="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
            </div>

        );
    }
}

render(<Navbar />, document.getElementById('notch'));
