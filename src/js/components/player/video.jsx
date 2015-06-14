import React    from 'react';

class Video extends React.Component {
    constructor() {
        super();
        this._bind(
            'loadVideo',
            'handleMediaLoaded',
            'handleMediaEnd');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        var videoEl = this.refs.video.getDOMNode();
        videoEl.addEventListener('loadeddata', this.handleMediaLoaded);
        videoEl.addEventListener('ended', this.handleMediaEnd);
    }

    componentWillUnmount() {
        var videoEl = this.refs.video.getDOMNode();
        videoEl.removeEventListener('loadeddata', this.handleMediaLoaded);
        videoEl.removeEventListener('ended', this.handleMediaEnd);
    }

    handleMediaLoaded() {
        console.log('video file loaded');
    }

    handleMediaEnd() {
        this.props.handleMediaEnd();
    }

    loadVideo() {
        var file = this.props.file;
        var videoUrl = URL.createObjectURL(file);

        return videoUrl;
    }

    render() {
        return (
            <video controls autoPlay
                ref='video'
                src={this.loadVideo()}
                className='comp-player-video'></video>
        );
    }
}

export default Video;
