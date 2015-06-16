import React from 'react';

class Clear extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleClear');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleClear() {
        this.props.handleClear();
    }

    render() {
        return (
            <i className='comp-tools-clear fa fa-trash-o'
                onClick={this.handleClear}></i>
        );
    }
}

export default Clear;
