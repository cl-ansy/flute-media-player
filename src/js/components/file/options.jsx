import React    from 'react';

class Options extends React.Component {
    constructor() {
        super();
        this._bind('handleCogClick', 'handleAutoplayChange');
        this.state = { formState: 'invisible' };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleCogClick() {
        this.setState({ formState: this.state.formState === 'visible' ? 'invisible' : 'visible' });
    }

    handleAutoplayChange(e) {
        this.props.handleAutoplayChange(!this.props.autoplay);
    }

    render() {
        return (
            <div className='comp-file-options'>
                <form className='options-form'
                    data-state={this.state.formState}>
                    <label htmlFor="autoplay" className="pure-checkbox">
                        <input id="autoplay" type="checkbox" checked={this.props.autoplay}
                            onChange={this.handleAutoplayChange} />
                        Autoplay
                    </label>
                </form>
                <button
                    className='options-button btn pure-button'
                    onClick={this.handleCogClick}>
                    <i className='fa fa-cog'></i>
                </button>
            </div>
        );
    }
}

export default Options;
