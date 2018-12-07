import React from 'react';
import {render} from 'react-dom';
import CookieGridItem from "./cookieGridItem.jsx";

class CookieGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.GetCatalogItems = this.GetCatalogItems.bind(this);
        this.GroupCollection = this.GroupCollection.bind(this);
        this.GetCatalogItems();
    }

    GetCatalogItems() {
        fetch('/get-products/basic', {method: 'GET'})
            .then(res => res.json())
            .then(items => this.GroupCollection(items));
    }

    GroupCollection(collection) {
        let product_collection = [];
        let product_collections = [];
        // In case our number of products is not evenly divisible by 3,
        // put the items that will not make the cut into a separate array
        let itterLength = this.props.limit ? Math.floor(collection.length / 2) : collection.length;
        let leftOver = collection.length % 3;
        let leftOvers = collection.slice(collection.length - leftOver, collection.length);

        for (let i = 0; i < itterLength; i++) {
            product_collection.push(collection[i]);
            if (((product_collection.length % 3 === 0))) {
                product_collections.push(product_collection);
                product_collection = [];
            }
        }

        product_collections.push(leftOvers);
        this.setState({products: product_collections});
    }

    render() {
        return <CookieGridItem title={this.props.title} products={this.state.products} showButton={!this.props.limit}/>
    }
}

let everydayCookies = document.querySelector('#everyday-cookies') || undefined;
let viewOtherProducts = document.querySelector('#other-products') || undefined;
let componentProps = {
    title: everydayCookies ? 'Your everyday cookies' : "Cookies you'll love",
    limit: !everydayCookies
};

render(<CookieGrid title={componentProps.title}
                   limit={componentProps.limit}/>, everydayCookies || viewOtherProducts);