import React from 'react';

const styles = {
    expanded: {
        display: 'inherit'
    },
    contract: {
        display: 'none'
    }
};

class AccordionPanel extends React.Component {

    constructor() {
        super();
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }

    handleHeaderClick () {
        this.props.callbackParent(this.props.id);
    }

    render() {
        const stateStyle = (this.props.state === 'expanded') ? styles.expanded: styles.contract;
        return (
            <div>
                <dt onClick={this.handleHeaderClick} class="Accordion-header">{this.props.header}</dt>
                <dd class="Accordion-content" style={stateStyle}>
                    <p>{this.props.content}</p>
                </dd>
            </div>
        );
    }
}

export default AccordionPanel;
