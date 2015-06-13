import React from 'react';

var styles = {
    reader: {
        overflow: 'hidden',
        position: 'relative',
    },
    readerInput: {
        background: 'rgba(113, 142, 164, 1)',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    }
};

class Reader extends React.Component {
    constructor() {
        super();
        this._bind('_handleChange');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleChange(e) {
        this.props.onFileAdd(e.target.files);
    }

    render() {
        return (
            <div style={styles.reader}>
                <input type='file' id='files' name='files[]' multiple onChange={this._handleChange} style={styles.readerInput} />
            </div>
        );
    }
}

export default Reader;
