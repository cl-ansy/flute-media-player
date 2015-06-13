import React    from 'react';

import Header   from './components/header';
import Nav    from './components/nav';
import Content  from './components/content';

var mountNode = document.getElementById('app');

class Main extends React.Component {
    constructor() {
        super();
        this._bind('handleFileSelect', 'handleNavToggle');
        this.state = { selectedFile: {}, showNav: true };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileSelect(file) {
        this.setState({ selectedFile: file });
    }

    handleNavToggle() {
        this.setState({ showNav: !this.state.showNav });
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
                        showNav={this.state.showNav} />
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
