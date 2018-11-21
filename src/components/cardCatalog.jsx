import React from 'react'
import {render} from 'react-dom';
import CardCatalogItem from './cardCatalogItem.jsx';

const CardCatalog = () => {
    const items = [
        {
            name: 'Collaboration',
            desc: 'Let’s make something good together. Team up with us and make brand new scrumptious cookies',
            image: 'https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-0.3.5&ixid=' +
                'eyJhcHBfaWQiOjEyMDd9&s=f6fc8776ae60faebee6b009f9bd2f382&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'Fresh ideas',
            desc: 'Stay up-to-date with the most innovative tips, tricks, and trends in baking.',
            image: 'https://images.unsplash.com/photo-1465808883813-7d2959af2252?ixlib=rb-0.3.5&s=' +
                'b5f6a9ebd46bf095401f5483c67466dd&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'Connect with us',
            desc: 'Seeking menu inspiration? Team up with us to bring dynamic, better-for-you flavors to your customers.',
            image: 'https://images.unsplash.com/photo-1520736362510-dda15d2c3086?ixlib=' +
                'rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19a634e222acbab9ab119199eace21e8&auto=format&fit=crop&w=634&q=80'
        }];

    return (
        <div className={'d-flex justify-content-center align-items-center'}>
            {
                items.map(item => (
                    <CardCatalogItem name={item.name} desc={item.desc} image={item.image}/>
                ))
            }
        </div>
    );

};

render(<CardCatalog/>, document.getElementById('engagement-container'));