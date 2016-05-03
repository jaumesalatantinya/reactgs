import React from 'react';

class StarsFrame extends React.Component {

    constructor() {
        super();
        this.numberOfStars = Math.floor(Math.random()*9)+1;
        this.stars = [];
        for (let i=0; i<this.numberOfStars; i++) {
            this.stars.push(<span key={i} className="glyphicon glyphicon-star"></span>);
        }
    }

    render() {
        return (
            <div id="stars-frame">
                <div className="well">
                    {this.stars}
                </div>
            </div>
        );
    }
}

export default StarsFrame;
