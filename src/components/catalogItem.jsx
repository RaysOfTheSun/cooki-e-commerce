import React from 'react';

export class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td>
                <div className='ml-5 mr-5'>
                    <img className={"card-img-top image-200-200 card-item-image"} src={"./images/01.png"} alt={"Card image cap"} />
                    <div className={'d-flex justify-content-center align-items-center flex-column h-100'}>
                        <h3 className={'font-weight-light mb-0 text-center'}>{this.props.name}</h3>
                        <p className={'text-extra-small'}>{this.props.description}</p>
                    </div>
                </div>
            </td>
    )
    }
    }