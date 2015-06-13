import React    from 'react';

import Reader   from './file/reader';
import List     from './file/list';

class Nav extends React.Component {
    constructor() {
        super();
        this._bind('handleFileAdd', 'handleFileSelect');
        this.state = { files: [] };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileAdd(files) {
        this.setState({ files: this.state.files.concat([].slice.call(files)) });
    }

    handleFileSelect(file) {
        this.props.handleFileSelect(file);
    }

    render() {
        return (
            <nav className='comp-nav' data-state={this.props.navState}>
                <Reader onFileAdd={this.handleFileAdd} />
                <List files={this.state.files} onFileSelect={this.handleFileSelect} />
            </nav>
        );
    }
}

export default Nav;
