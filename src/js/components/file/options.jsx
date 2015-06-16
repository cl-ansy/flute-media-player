import React    from 'react';

import Reader   from './tools/reader';
import Autoplay from './tools/autoplay';

class Options extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleOptionChange');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleOptionChange(option, value) {
        this.props.handleOptionChange(option, value);
    }

    render() {
        return (
            <div className='comp-file-options'>
                <Reader
                    handleFileAdd={this.props.handleFileAdd} />
                <i className='fa fa-trash-o'></i>
                <Autoplay
                    handleOptionChange={this.handleOptionChange}
                    options={this.props.options} />
            </div>
        );
    }
}

export default Options;
