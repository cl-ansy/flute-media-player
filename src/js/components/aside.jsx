import React    from 'react';

import Reader   from './file/reader';
import List     from './file/list';

var styles = {
    aside: {
        flex: '0 1 auto',
        order: '1',
        height: '90%',
        backgroundColor: 'rgba(44, 55, 64, 1)'
    }
};

class Aside extends React.Component {
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
            <aside style={styles.aside}>
                <Reader onFileAdd={this.handleFileAdd} />
                <List files={this.state.files} onFileSelect={this.handleFileSelect} />
            </aside>
        );
    }
}

export default Aside;
