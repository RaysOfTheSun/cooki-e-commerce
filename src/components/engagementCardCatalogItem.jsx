import React from 'react';

const EngagementCardCatalogItem = ({name, image, desc})=>{
    return (
        <div className={'card mx-3 border-0 d-flex justify-content-center image-350-270'}>
            <img src={image} className={'card-img-top image-350-270'}/>
            <div className={'card-body mb-4'}>
                <h4 className={'font-weight-bold my-3'}>{name}</h4>
                <p className={'text-extra-small mb-3'}>{desc}</p>
                <a className={'text-plain'} href={'#'}>{`See ${name}`}<i className={'fas fa-arrow-right link-arrow'}></i></a>
            </div>
        </div>
    );
};

export default EngagementCardCatalogItem;