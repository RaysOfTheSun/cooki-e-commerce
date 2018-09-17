import React from 'react';
import {render} from 'react-dom';
import {CartSidebarItem} from './cartSidebarItem.jsx';

export class CartSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    GetCartItems() {
        //stub
        // store item information like name (or ID) and quantity in a cookie
        // so that it can be retrieved by name or identifier from the
        // database
    }

    render() {
        return (
            <div id={'cartSidebar-inner'} className={'container'}>
                <CartSidebarItem
                    itemName={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                    'Ut efficitur tempor mattis. Aenean ut commodo ex, a egestas leo.'}
                    price={60.59}
                />
            </div>
        )
    }
}

render(<CartSidebar/>, document.getElementById('cart-side'));