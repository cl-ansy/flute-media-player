import React    from 'react';

import Reader   from './file/reader';
import List     from './file/list';

class Nav extends React.Component {
    constructor() {
        super();
        this._bind(
            'handleFileAdd',
            'handleFileSelect',
            'handleFileRemove',
            'handleAutoplayChange');
        this.state = {
            files: [],
            selectedFile: {},
            options: {
                autoPlay: false
            }
        };
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    handleFileAdd(files) {
        this.setState({ files: this.state.files.concat([].slice.call(files)) });
    }

    handleFileSelect(file) {
        this.props.handleFileSelect(file);
        this.setState({ selectedFile: file });
    }

    handleFileRemove(fileIndex) {
        this.props.handleFileRemove(fileIndex);
        // not using splice to remove so that the state isnt mutated
        this.setState({
            files: this.state.files
                .filter((el, i) => {
                    return i !== fileIndex;
                }),
            selectedFile: fileIndex === this.state.selectedFile.index ? {} : this.state.selectedFile
        })
    }

    handleAutoplayChange(bool) {
        console.log(bool);
        this.setState({
            options: {
                autoplay: bool
            }
        });
    }

    render() {
        return (
            <nav
                className='comp-nav'
                data-state={this.props.navState}>
                <Reader
                    handleFileAdd={this.handleFileAdd} />
                <List
                    files={this.state.files}
                    selectedFile={this.state.selectedFile}
                    options={this.state.options}
                    handleFileSelect={this.handleFileSelect}
                    handleFileRemove={this.handleFileRemove}
                    handleAutoplayChange={this.handleAutoplayChange} />
            </nav>
        );
    }
}

export default Nav;
