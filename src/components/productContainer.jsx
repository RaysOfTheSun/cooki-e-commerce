import React from 'react';
import {render} from 'react-dom';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cookies: [], cookieInfos: []};
        this.GetCookieInfos = this.GetCookieInfos.bind(this);
        this.GetCookieInfos();
    }

    GetCookieInfos() {
        fetch('/get-products', {method: 'GET'})
            .then(res => res.json())
            .then(infos => this.setState({cookieInfos: infos}));
    }


    render() {
        console.log(this.state.cookieInfos);
        return (
            <div>

            </div>
        )
    }
}

render(<ProductContainer/>, document.getElementById('product-container'));