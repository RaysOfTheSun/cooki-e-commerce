import React, {Component} from 'react';
import {render} from 'react-dom';
import ProductSlide from './productSlide.jsx';
import ProductDescription from './productDescription.jsx';
import ProductInfo from './productInfo.jsx';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {cookies: [], cookieInfos: [], currItem: 0};
        this.GetCookieInfos = this.GetCookieInfos.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.GetFromState = this.GetFromState.bind(this);
        this.GetCookieInfos();
        this.descr = undefined;
    }

    async GetCookieInfos() {
        let [cookies, infos] = await Promise.all([
            fetch('/get-products/cookie-products', {method: 'GET'}).then(res => res.json()),
            fetch('/get-products/cookie-products/info').then(res => res.json())
        ]);

        this.setState({cookies: cookies, cookieInfos: infos});
    }

    onHandleChange(newItem) {
        this.descr = !this.descr ?
            document.querySelector('.product-desc') : this.descr;
        this.descr.classList.remove('active');
        this.setState({currItem: newItem});
    }

    GetFromState(stateItem, index, key) {
        // make sure there is something in the state before attempting to retrieve the specified key and its value
        return this.state[stateItem][index] ? (this.state[stateItem][index])[key] : undefined;
    }

    render() {
        let title = this.GetFromState('cookies', this.state.currItem, 'name');
        let description = this.GetFromState('cookies', this.state.currItem, 'descFull');
        let nutriFacts = this.GetFromState('cookieInfos', this.state.currItem, 'nutriFacts');
        let serving = this.GetFromState('cookieInfos', this.state.currItem, 'serving');
        let ingredients = this.GetFromState('cookieInfos', this.state.currItem, 'ingredients');
        let points = this.GetFromState('cookieInfos', this.state.currItem, 'points');
        return (
            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                <ProductSlide products={this.state.cookies} onItemChange={this.onHandleChange}/>
                <ProductDescription title={title} description={description}/>
                <ProductInfo info={nutriFacts} serving={serving} ingredients={ingredients} points={points}/>
            </div>
        )
    }
}

render(<ProductContainer/>, document.getElementById('container'));