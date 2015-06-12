import React from 'react';

var styles = {
    reader: {
    }
};

class Reader extends React.Component {
    constructor() {
        super();
        this._bind('_handleRead');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleRead(e) {
        console.log(e.target.files);
    }

    render() {
        return (
            <div style={styles.reader}>
                <input type='file' id='files' name='files[]' multiple onChange={this._handleRead} />
            </div>
        );
    }
}

export default Reader;
