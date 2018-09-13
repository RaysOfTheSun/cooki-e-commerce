import React from "react";
import { render } from "react-dom";
import { CarouselItem } from "./carouselItem.jsx";

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comments:[]};
        this.getComments();
    }

    getComments() {
        fetch('/get-comments')
            .then(res => res.json())
            .then(data => this.setState({ comments: data }));
    }

    render() {
        console.log(this.state.comments);
        return <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    {this.state.comments.map((comment, i) => (
                        <CarouselItem
                            commenter={comment.commenter}
                            comment={comment.comment}
                            class={
                                i < 1
                                    ? "carousel-item active"
                                    : "carousel-item"
                            }
                        />
                    ))}
                </div>
            </div>;
    }
}

render( <Carousel />, document.getElementById("fourth-banner-inner"));
