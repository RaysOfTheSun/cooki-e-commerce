import React from 'react';

export class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td>
                <div className={'card border'}>
                    <div className={'card-header'}>
                        <p className={'font-weight-light mb-0 text-center'}>{this.props.name}</p>
                    </div>
                    <img className={"card-img-top image-200-200"} src={"./images/01.png"} alt={"Card image cap"} />
                        <div className={'card-body'}>
                            <div className={'row d-flex align-items-center h-100'}>
                                <p className={'lead'}>{this.props.description}</p>
                            </div>
                        </div>
                </div>
            </td>
    )
    }
    }