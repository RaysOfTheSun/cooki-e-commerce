import React from "react";
import { render } from "react-dom";
import { CarouselItem } from "./carouselItem.jsx";

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.comments = [
            {
                commenter: "hermit",
                comment:
                    "Nam porta justo at imperdiet sagittis. Sed sit amet erat mollis, ullamcorper libero ac, faucibus magna."
            },
            {
                commenter: "suscipit",
                comment:
                    "In nulla dolor, mattis ac pretium non, mollis rutrum lacus. Interdum et malesuada ames ac ante ipsum primis in faucibus.Nulla a velit bibendum, finibus nisl eu vulputate purus..."
            }
        ];
    }

    render() {
        return <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    {this.comments.map((comment, i) => (
                        <CarouselItem
                            commenter={comment.commenter}
                            comment={comment.comment}
                            class={
                                i == 1
                                    ? "carousel-item active"
                                    : "carousel-item"
                            }
                        />
                    ))}
                </div>
            </div>;
    }
}

render(<Carousel />, document.getElementById("fourth-banner-inner"));
