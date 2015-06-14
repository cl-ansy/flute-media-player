import React    from 'react';

import Reader   from './file/reader';
import List     from './file/list';
import Options  from './file/options';

class Nav extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleFileAdd',
            'handleFileSelect',
            'handleFileRemove',
            'handleOptionChange');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileAdd(files) {
        this.props.handleFileAdd(files);
    }

    handleFileSelect(file) {
        this.props.handleFileSelect(file);
    }

    handleFileRemove(fileIndex) {
        this.props.handleFileRemove(fileIndex);
    }

    handleOptionChange(option, value) {
        this.props.handleOptionChange(option, value);
    }

    render() {
        return (
            <nav
                className='comp-nav'
                data-state={this.props.navState}>
                <Reader
                    handleFileAdd={this.handleFileAdd} />
                <List
                    files={this.props.files}
                    selectedFile={this.props.selectedFile}
                    handleFileSelect={this.handleFileSelect}
                    handleFileRemove={this.handleFileRemove} />
                <Options
                    options={this.props.options}
                    handleOptionChange={this.handleOptionChange} />
            </nav>
        );
    }
}

export default Nav;
