import React from 'react';

class AnswerFrame extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="answer-frame">
                <div className="well">
                    {this.props.selectedNumbers}
                </div>
            </div>
        );
    }
}

export default AnswerFrame;
