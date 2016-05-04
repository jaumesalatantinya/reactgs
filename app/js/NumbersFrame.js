import React from 'react';

class NumbersFrame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let numbers = [], className;
        for (let i=1; i<=9; i++) {
            className = 'numbers selected-' + (this.props.selectedNumbers.indexOf(i)>=0)
            numbers.push(
                <div key={i} className="number">
                    {i}
                </div>
                );
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}

export default NumbersFrame;
