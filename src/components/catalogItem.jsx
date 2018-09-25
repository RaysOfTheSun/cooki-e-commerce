import React from 'react';

export class CatalogItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <td className={this.props.class}>
                <h6>{this.props.name}</h6>
            </td>
        )
    }
}