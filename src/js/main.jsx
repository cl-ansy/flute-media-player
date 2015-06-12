import React    from 'react';

import Header   from './components/header';
import Aside    from './components/aside';
import Section  from './components/section';

var mountNode = document.getElementById('main');

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';
mountNode.style.height = '100%';

var styles = {
    container: {
        display: 'flex',
        flex: '1 100%',
        flexFlow: 'row wrap',
        height: '100%',
        maxHeight: '100%'
    }
};

class Main extends React.Component {
    constructor() {
        super();
        this._bind('handleFileSelect');
        this.state = { selectedFile: {} };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileSelect(file) {
        this.setState({ selectedFile: file });
    }

    render() {
        return (
            <div style={styles.container}>
                <Header selectedFile={this.state.selectedFile} />
                <Aside handleFileSelect={this.handleFileSelect} />
                <Section />
            </div>
        );
    }
}

React.render(
    <Main />,
    mountNode
);
