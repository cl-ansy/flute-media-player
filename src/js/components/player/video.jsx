import React from 'react';

var styles = {
    video: {
        maxHeight: '100%',
        maxWidth: '100%'
    }
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
            <video controls autoPlay src={this.loadVideo()} style={styles.video}></video>
        );
    }
}

export default Video;
