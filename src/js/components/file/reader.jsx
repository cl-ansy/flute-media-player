import React from 'react';

var styles = {
    reader: {
        overflow: 'hidden',
        position: 'relative',
    },
    readerInput: {
        background: 'rgba(113, 142, 164, 1)',
        overflow: 'hidden',
        borderRadius: '.2em',
        padding: '.5em',
        margin: '.5em'
    }
};

class Reader extends React.Component {
    constructor() {
        super();
        this._bind('_handleFiles');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleFiles(e) {
        this.props.onFileAdd(e.target.files);
    }

    render() {
        return (
            <div style={styles.reader}>
                <input type='file' id='files' name='files[]' multiple onChange={this._handleFiles} style={styles.readerInput} />
            </div>
        );
    }
}

export default Reader;
