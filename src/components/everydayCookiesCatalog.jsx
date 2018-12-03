import React from 'react';
import {render} from 'react-dom';

export class EverydayCookiesCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.GetCatalogItems = this.GetCatalogItems.bind(this);
        this.GroupCollection = this.GroupCollection.bind(this);
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
        let leftOver = collection.length % 3;
        let leftOvers = collection.slice(collection.length - leftOver, collection.length);

        for (let i = 0; i < collection.length; i++) {
            product_collection.push(collection[i]);
            if (((product_collection.length % 3 === 0))) {
                product_collections.push(product_collection);
                product_collection = [];
            }
        }

        product_collections.push(leftOvers);
        this.setState({products: product_collections});
    }

    componentWillMount() {
        this.GetCatalogItems();
    }

    render() {
        return (
            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                <h3>Your Everyday Cookies</h3>
                <div className={'py-md-5 py-sm-1 d-flex justify-content-center align-items-center c-flex-column'}>
                    {
                        this.state.products.map((productCollection, i) => (
                                <div
                                    className={i > 0 ? 'd-flex justify-content-center align-items-center flex-mobile-column mobile-hidden' :
                                        'd-flex justify-content-center align-items-center flex-mobile-column'}>
                                    {
                                        productCollection.map(product => (
                                            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                                <a href={'#'} className={'text-plain'}>
                                                    <div className='ml-3 mr-3'>
                                                        <img className={"card-img-top image-350-270 card-item-image mb-3"} src={product.image}
                                                             alt={"Card image cap"}/>
                                                        <div
                                                            className={'d-flex justify-content-center align-items-center flex-column h-100'}>
                                                            <h4 className={'font-weight-light mb-1 text-center'}>{product.name}</h4>
                                                            <p className={'text-extra-small text-muted'}>{product.desc}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        )
                    }
                </div>
                <input type="button"
                       className="btn btn-lg btn-dark text-extra-small p-3 px-4 -mt-30 font-weight-bold rounded-0"
                       value="See Our Cookies"/>
            </div>
        )
    }
}

render(<EverydayCookiesCatalog/>, document.getElementById('everyday-cookies'));
