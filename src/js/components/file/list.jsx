import React from 'react';

class List extends React.Component {
    constructor() {
        super();
        this._bind('_handleFileClick');
        this.state = { active: {} };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _handleRemoveClick(fileIndex) {
        this.props.handleFileRemove(fileIndex);
        if (fileIndex === this.state.active.index) {
            this.setState({ active: {} });
        }
    }

    _handleFileClick(file, index) {
        this.props.handleFileSelect(file);
        this.setState({ active: file });
    }

    render() {
        var list;
        if (this.props.files.length) {
            list = <ul>
                {this.props.files.map((file, i) => {
                    file.index = i;
                    return (
                        // TODO: abstract list items into separate component ?
                        <li key={i}>
                            <i
                                className='fa fa-close'
                                onClick={this._handleRemoveClick.bind(this, i)}>
                            </i>
                            <div
                                onClick={this._handleFileClick.bind(this, file, i)}
                                data-state={this.state.active.index === i ? 'selected' : ''}>{file.name}
                            </div>
                        </li>
                    );
                })}
            </ul>;
        } else {
            list = <div className='no-media'>
                <i className='fa fa-long-arrow-up'></i>
                <p>Add some media files to get started.</p>
            </div>;
        }

        return (
            <div className='comp-file-list'>
                {list}
            </div>
        );
    }
}

export default List;
