import React from 'react';
import StarsFrame from './StarsFrame';
import ButtonFrame from './ButtonFrame';
import AnswerFrame from './AnswerFrame';
import NumbersFrame from './NumbersFrame';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame />
                    <ButtonFrame />
                    <AnswerFrame />
                </div>
                <NumbersFrame />
            </div>
        );
    }
}

export default Game;
