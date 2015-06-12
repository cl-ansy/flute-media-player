import React from 'react';

var styles = {
    reader: {
    }
};

class Reader extends React.Component {
    constructor() {
        super();
        this._bind('_handleFiles');
        this.state = { files: {} };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleFiles(e) {
        this.setState({
            files: e.target.files
        });
    }

    render() {
        return (
            <div style={styles.reader}>
                <input type='file' id='files' name='files[]' multiple onChange={this._handleFiles} />
            </div>
        );
    }
}

export default Reader;
