import React    from 'react';

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
            <video controls autoPlay
                src={this.loadVideo()}
                className='comp-player-video'></video>
        );
    }
}

export default Video;
