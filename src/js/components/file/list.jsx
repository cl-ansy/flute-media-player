import React from 'react';

var styles = {
    list: {
        height: '90%',
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: '0.5em',
        padding: '0'
    },
    listItem: {
        cursor: 'pointer',
        whiteSpace: 'nowrap'
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

    _handleClick(file, index) {
        file.index = index;
        this.props.onFileSelect(file);
    }

    render() {
        return (
            <ul style={styles.list}>
                {this.props.files.map((file, i) => {
                    return (
                        // TODO: abstract list items into separate component ?
                        <li key={i} data={file} onClick={this._handleClick.bind(this, file, i)} style={styles.listItem}>{file.name}</li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
