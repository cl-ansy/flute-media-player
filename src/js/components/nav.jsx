import React    from 'react';

import List     from './file/list';
import Options  from './file/options';

class Nav extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleFileAdd',
            'handleFileSelect',
            'handleClear',
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

    handleClear() {
        this.props.handleClear();
    }

    handleOptionChange(option, value) {
        this.props.handleOptionChange(option, value);
    }

    render() {
        return (
            <nav
                className='comp-nav'
                data-state={this.props.navState}>
                <Options
                    options={this.props.options}
                    handleFileAdd={this.handleFileAdd}
                    handleClear={this.handleClear}
                    handleOptionChange={this.handleOptionChange} />
                <List
                    files={this.props.files}
                    selectedFile={this.props.selectedFile}
                    handleFileSelect={this.handleFileSelect}
                    handleFileRemove={this.handleFileRemove} />
            </nav>
        );
    }
}

export default Nav;
