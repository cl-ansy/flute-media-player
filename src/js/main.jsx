import React    from 'react';

import Header   from './components/header';
import Aside    from './components/aside';
import Section  from './components/section';

var mountNode = document.getElementById('app');

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
            <div className='main'>
                <Header selectedFile={this.state.selectedFile} />
                <Aside handleFileSelect={this.handleFileSelect} />
                <Section selectedFile={this.state.selectedFile} />
            </div>
        );
    }
}

React.render(
    <Main />,
    mountNode
);
