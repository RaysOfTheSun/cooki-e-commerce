import React from 'react'
import {render} from 'react-dom';

const EngagementCardCatalog = () => {
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
                    <div className={'card mx-3 border-0 d-flex justify-content-center image-350-270'}>
                        <img src={item.image} className={'card-img-top image-350-270'} alt={item.name}/>
                        <div className={'card-body mb-4'}>
                            <h4 className={'font-weight-bold my-3'}>{item.name}</h4>
                            <p className={'text-extra-small mb-3'}>{item.desc}</p>
                            <a className={'text-plain'} href={'#'}>{`See more`}
                                <i className={'fas fa-arrow-right link-arrow'}/></a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

render(<EngagementCardCatalog/>, document.getElementById('engagement-container'));