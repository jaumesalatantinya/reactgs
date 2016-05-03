import React from 'react';
import AccordionPanel from './AccordionPanel';

const contents = [
    { header: 'Section 1', content: 'Section 1 Content....' },
    { header: 'Section 2', content: 'Section 2 Content....' },
    { header: 'Section 3', content: 'Section 3 Content....' },
    { header: 'Section 4', content: 'Section 4 Content....' }
];

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.updateExpandedPanel = this.updateExpandedPanel.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState ({ 
                panels: contents,
                current: 0
            });
        }, 1000);
    }

    updateExpandedPanel(newExpandedPanel) {
        this.setState({current: newExpandedPanel});
    }
    
    render() {
        let panels;
        if (this.state.panels) {
            panels = this.state.panels.map((panel, i) => {
                const exp = (this.state.current == i) ? 'expanded': 'contract';
                return (<AccordionPanel key={i} id={i} state={exp} header={panel.header} content={panel.content} callbackParent={this.updateExpandedPanel}/>);
            });
        }
        return (
            <dl class="Accordion">
                {panels}
            </dl>
        );
    }
}

export default Accordion;
