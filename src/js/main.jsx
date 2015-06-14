import React    from 'react';

import Header   from './components/header';
import Nav      from './components/nav';
import Content  from './components/content';

var mountNode = document.getElementById('app');

class Main extends React.Component {
    constructor() {
        super();
        this._bind('handleFileSelect', 'handleNavToggle', 'handleFileRemove');
        this.state = { selectedFile: {}, navState: 'visible' };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileSelect(file) {
        this.setState({ selectedFile: file });
    }

    handleNavToggle() {
        this.setState({ navState: this.state.navState === 'visible' ? 'invisible' : 'visible' });
    }

    handleFileRemove(fileIndex) {
        if (this.state.selectedFile.index === fileIndex) {
            this.setState({ selectedFile: {} });
        }
    }

    render() {
        return (
            <div className='main'>
                <Header
                    selectedFile={this.state.selectedFile}
                    handleNavToggle={this.handleNavToggle} />
                <div className='body'>
                    <Nav
                        handleFileSelect={this.handleFileSelect}
                        handleFileRemove={this.handleFileRemove}
                        navState={this.state.navState} />
                    <Content
                        selectedFile={this.state.selectedFile} />
                </div>
            </div>
        );
    }
}

React.render(
    <Main />,
    mountNode
);
