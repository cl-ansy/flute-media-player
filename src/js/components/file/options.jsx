import React    from 'react';

import Reader   from './tools/reader';
import Clear    from './tools/clear';
import Autoplay from './tools/autoplay';

class Options extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleClear',
            'handleOptionChange');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleOptionChange(option, value) {
        this.props.handleOptionChange(option, value);
    }

    handleClear() {
        this.props.handleClear();
    }

    render() {
        return (
            <div className='comp-file-options'>
                <Reader
                    handleFileAdd={this.props.handleFileAdd} />
                <Clear
                    handleClear={this.handleClear} />
                <Autoplay
                    handleOptionChange={this.handleOptionChange}
                    options={this.props.options} />
            </div>
        );
    }
}

export default Options;
