import React from 'react';

export class CartSidebarItem extends React.Component {
    render() {
        return (
            <div className={'card border border-info'}>
                <div className={'card-header'}>
                    <p className={'font-weight-light mb-0 text-center'}>
                        {this.props.itemName}
                    </p>
                </div>
                <div className={'card-body'}>
                    <div className={'row d-flex align-items-center h-100'}>
                        <div className={'col-sm-4 text-center'}>
                            <img src='./images/p04.png' className={'image-100-100'}/>
                        </div>
                        <div className={'col-sm-8'}>
                            <p className='m-0'>QUANTITY <small className={'text-muted'}>
                                (${this.props.price} per piece)</small></p>
                            <div className={'input-group'}>
                                <div className={'input-group-prepend'}>
                                    <button type='button' className={'btn btn-success'}>
                                        <i className={'fa fa-plus'}></i>
                                    </button>
                                </div>
                                <input id={'item-quantity'} type={'text'}
                                       className={'form-control text-center'} name={'quantity'}/>
                                <div className={"input-group-append"}>
                                    <button type='button' className={'btn btn-danger'}>
                                        <i className={'fa fa-minus'}></i>
                                    </button>
                                </div>
                            </div>
                            <p className={"m-0"}>TOTAL PRICE</p>
                            <div className={"input-group"}>
                                <div className={"input-group-prepend"}>
                                    <div className={"input-group-text"}>
                                        <i className={"fa fa-dollar"}></i>
                                    </div>
                                </div>
                                <input type={"text"} name={"price"}
                                       className={"form-control text-center"} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"card-footer bg-danger p-0 m-0"}>
                    <button type="button" className={"btn btn-danger rounded-0 w-100 h-100"}
                            style={{fontSize: "1" + "rem"}}>
                        {"REMOVE"}
                    </button>
                </div>
            </div>
        )
    }
}