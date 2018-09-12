import React from "react";

export class CarouselItem extends React.Component {
    render() {
        return (
            <div class={this.props.class}>
                <div class="">
                    <div class="container-fluid">
                        <div class="wrap-30">
                            <div class="container">
                                <div class="row">
                                    <p class="text-uppercase text-emphasize-small font-weight-bold color-cookie-blue">
                                        What {this.props.commenter} says about
                                        cookie stop:
                                    </p>
                                    <p class="font-weight-bold text-emphasize-medium pb-2">
                                        {this.props.comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
