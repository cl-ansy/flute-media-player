import React    from 'react';

class Autoplay extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleOptionChange');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleOptionChange(e) {
        this.props.handleOptionChange(e.target.id, !this.props.options.autoplay);
    }

    render() {
        return (
            <i id='autoplay' className='comp-tools-autoplay fa fa-play-circle-o'
                data-state={this.props.options.autoplay ? 'selected' : ''}
                onClick={this.handleOptionChange}></i>
        );
    }
}

export default Autoplay;
