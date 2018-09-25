import React from "react";
import {render} from "react-dom";
import {CarouselItem} from "./carouselItem.jsx";

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comments: []};
    }

    getComments() {
        fetch('/get-comments', {method: "GET"})
            .then(res => res.json())
            .then(data => this.setState({comments: data}));
    }

    componentWillMount() {
        this.getComments();
    }

    render() {
        console.log(this.state.comments);
        return (
            <div id={"carouselExampleControls"} className={"carousel slide"} data-ride={"carousel"}>
                <div className={"carousel-inner"}>
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
            </div>
        )
    }
}

// render(<Carousel/>, document.getElementById("fourth-banner-inner"));
