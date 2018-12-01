import React from 'react';
import {render} from 'react-dom';
import ProductSlide from './productSlide.jsx';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cookies: [], cookieInfos: [], lol: 0};
        this.GetCookieInfos = this.GetCookieInfos.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.GetCookieInfos();
    }

    GetCookieInfos() {
        fetch('/get-products/cookie-products', {method: 'GET'})
            .then(res => res.json())
            .then(cookie => this.setState({cookies: cookie}));
    }

    onHandleChange(newItem) {
        this.setState({lol: newItem}, () => {
            console.log('success', this.state.lol);
        });
    }

    render() {
        return (
            <div className={'d-flex justify-content-center align-items-center flex-column p-relative overflow-hidden'}>
                <ProductSlide products={this.state.cookies} onItemChange={this.onHandleChange}/>
            </div>
        )
    }
}

render(<ProductContainer/>, document.getElementById('container'));