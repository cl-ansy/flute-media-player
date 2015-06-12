import React from 'react';

var styles = {
    list: {
        maxHeight: '90%',
        overflowY: 'scroll',
        margin: '0.5em'
    }
};

class List extends React.Component {
    constructor() {
        super();
        this._bind('_handleClick');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleClick(file) {
        this.props.onFileSelect(file);
    }

    render() {
        return (
            <ul style={styles.list}>
                {this.props.files.map((file, i) => {
                    return (
                        <li key={i} data={file} onClick={this._handleClick.bind(this, file)}>{file.name}</li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
