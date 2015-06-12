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
        this._bind('handleFileSelect');
        this.state = { files: [] };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileSelect(files) {
        this.setState({ files: this.state.files.concat([].slice.call(files)) });
    }

    render() {
        return (
            <aside style={styles.aside}>
                <Reader onFileSelect={this.handleFileSelect} />
                <List files={this.state.files} />
            </aside>
        );
    }
}

export default Aside;
