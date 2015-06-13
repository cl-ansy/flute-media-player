import React from 'react';

class List extends React.Component {
    constructor() {
        super();
        this._bind('_handleClick');
        this.state = { active: {} };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleClick(file, index) {
        file.index = index;
        this.props.onFileSelect(file);
        this.setState({ active: file });
    }

    render() {
        return (
            <ul className='comp-file-list'>
                {this.props.files.map((file, i) => {
                    return (
                        // TODO: abstract list items into separate component ?
                        <li key={i}
                            onClick={this._handleClick.bind(this, file, i)}
                            data-state={this.state.active.index === i ? 'selected' : ''}>
                            {file.name}</li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
