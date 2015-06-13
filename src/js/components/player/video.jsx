import React from 'react';

var styles = {
};

class Video extends React.Component {
    constructor() {
        super();
        this._bind('loadVideo');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    loadVideo() {
        var file = this.props.file;
        var videoUrl = URL.createObjectURL(file);

        return videoUrl;
    }

    render() {
        return (
            <video controls autoplay src={this.loadVideo()}></video>
        );
    }
}

export default Video;
