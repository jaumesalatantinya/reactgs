import React from 'react';

class NumbersFrame extends React.Component {

    constructor() {
        super();
    }

    render() {
        let numbers = [];
        for (let i=1; i<=9; i++) {
            numbers.push(<div key={i} className="number">{i}</div>);
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
