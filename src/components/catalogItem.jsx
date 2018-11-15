import React from 'react';

export class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'d-flex justify-content-center align-items-center flex-column'}>
                <a href={'#'} className={'text-plain'}>
                    <div className='ml-3 mr-3'>
                        <img className={"card-img-top image-350-270 card-item-image mb-3"} src={this.props.image} alt={"Card image cap"} />
                        <div className={'d-flex justify-content-center align-items-center flex-column h-100'}>
                            <h4 className={'font-weight-light mb-1 text-center'}>{this.props.name}</h4>
                            <p className={'text-extra-small text-muted'}>{this.props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}