import React from 'react';

const CatalogItem = ({image, name, desc})=>{
    return (
        <div className={'d-flex justify-content-center align-items-center flex-column'}>
            <a href={'#'} className={'text-plain'}>
                <div className='ml-3 mr-3'>
                    <img className={"card-img-top image-350-270 card-item-image mb-3"} src={image} alt={"Card image cap"} />
                    <div className={'d-flex justify-content-center align-items-center flex-column h-100'}>
                        <h4 className={'font-weight-light mb-1 text-center'}>{name}</h4>
                        <p className={'text-extra-small text-muted'}>{desc}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CatalogItem;