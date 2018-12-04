import React from 'react';
import {render} from 'react-dom';
import ProductSlide from './productSlide.jsx';
import ProductDescription from './productDescription.jsx';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cookies: [], cookieInfos: [], currItem: 0};
        this.GetCookieInfos = this.GetCookieInfos.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.GetCookieInfos();
    }

    GetCookieInfos() {
        // TODO: look into promises and async/await
        fetch('/get-products/cookie-products', {method: 'GET'})
            .then(res => res.json())
            .then(cookie => this.setState({cookies: cookie, currItem: Math.floor(cookie.length / 2)}));
        fetch('/get-products/cookie-products/info')
            .then(res => res.json())
            .then(infos => this.setState({cookieInfos: infos}))
    }

    onHandleChange(newItem) {
        this.setState({currItem: newItem});
    }

    render() {
        console.log(this.state);
        let title = this.state.cookies[this.state.currItem] ? this.state.cookies[this.state.currItem].name : '';
        let description = this.state.cookies[this.state.currItem] ? this.state.cookies[this.state.currItem].descFull : '';
        return (
            <div className={'d-flex justify-content-center align-items-center flex-column p-relative overflow-hidden'}>
                <ProductSlide products={this.state.cookies} onItemChange={this.onHandleChange}/>
                <ProductDescription title={title} description={description} class={'d-flex justify-content-center ' +
                'align-items-center flex-column product-desc active'}/>
            </div>
        )
    }
}

render(<ProductContainer/>, document.getElementById('container'));