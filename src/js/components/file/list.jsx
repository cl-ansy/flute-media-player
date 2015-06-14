import React    from 'react';
import Options  from './options';

class List extends React.Component {
    constructor() {
        super();
        this._bind(
            '_handleRemoveClick',
            '_handleFileClick',
            'handleAutoplayChange');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        //get files from localStorage
    }

    componentWillUnmount() {
        //save files to localStorage
    }

    _handleRemoveClick(fileIndex) {
        this.props.handleFileRemove(fileIndex);
    }

    _handleFileClick(file, index) {
        this.props.handleFileSelect(file);
    }

    handleAutoplayChange(bool) {
        this.props.handleAutoplayChange(bool);
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
                                className='item-name'
                                onClick={this._handleFileClick.bind(this, file, i)}
                                data-state={this.props.selectedFile.index === i ? 'selected' : ''}>{file.name}
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
                <Options
                    handleAutoplayChange={this.handleAutoplayChange}
                    autoplay={this.props.options.autoplay} />
            </div>
        );
    }
}

export default List;
