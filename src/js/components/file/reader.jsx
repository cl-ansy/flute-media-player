import React from 'react';

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
            <div className='comp-file-reader'>
                <button className='btn'>Add Media</button>
                <input type='file' id='files' name='files[]' multiple onChange={this._handleChange} />
            </div>
        );
    }
}

export default Reader;
