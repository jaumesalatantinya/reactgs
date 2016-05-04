import React from 'react';
import StarsFrame from './StarsFrame';
import ButtonFrame from './ButtonFrame';
import AnswerFrame from './AnswerFrame';
import NumbersFrame from './NumbersFrame';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedNumbers: [3, 6]};
    }

    clickNumber (clickedNumber) {
        this.setState(
            {selectedNumbers: this.state.selectedNubmers.concat(clickedNumber)}
        );
    }
    
    render() {
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame />
                    <ButtonFrame />
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers} />
                </div>
                <NumbersFrame selectedNumbers={this.state.selectedNumbers} />
            </div>
        );
    }
}

export default Game;
