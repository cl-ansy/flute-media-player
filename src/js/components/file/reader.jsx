import React from 'react';

class Reader extends React.Component {
    constructor() {
        super();
        this._bind('_handleFileAdd');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleFileAdd(e) {
        this.props.handleFileAdd(e.target.files);
    }

    render() {
        return (
            <div className='comp-file-reader'>
                <button className='add-media-button btn pure-button pure-button-primary'>Add Media</button>
                <input type='file' id='files' name='files[]'
                    multiple
                    onChange={this._handleFileAdd} />
            </div>
        );
    }
}

export default Reader;
