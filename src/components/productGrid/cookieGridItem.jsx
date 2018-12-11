import React from 'react';

const CookieGridItem = ({title, products, showButton}) => {
    let button = <input type="button"
                        className="btn btn-lg btn-dark text-extra-small p-3 px-4 font-weight-bold rounded-0"
                        value="See Our Cookies"/>;

    return (
        <div className={'d-flex justify-content-center align-items-center flex-column'}>
            <h3>{title}</h3>
            <div className={'py-4 d-flex justify-content-center align-items-center c-flex-column'}>
                {
                    products.map((productCollection, i) => (
                            <div
                                className={i > 0 ? 'd-flex justify-content-center align-items-center flex-mobile-column mobile-hidden' :
                                    'd-flex justify-content-center align-items-center flex-mobile-column'}>
                                {
                                    productCollection.map(product => (
                                        <div className={'d-flex justify-content-center align-items-center flex-column'}>
                                            <a href={'#'} className={'text-plain'}>
                                                <div className='ml-3 mr-3'>
                                                    <img className={"card-img-top image-350-270 card-item-image mb-3"}
                                                         src={product.image}
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
            {showButton ? button : undefined}
        </div>
    )
};

export default CookieGridItem;

// render(<CookieGridItem/>, document.getElementById('everyday-cookies'));
