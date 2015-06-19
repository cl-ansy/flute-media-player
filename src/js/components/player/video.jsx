import React from 'react';

class Video extends React.Component {
    constructor() {
        super();
        this._bind(
            'constructVideoEl',
            'destructVideoEl',
            'loadVideo',
            'handleMediaLoaded',
            'handleMediaEnd');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        return this.constructVideoEl(this.props.file);
    }

    componentWillReceiveProps(nextProps) {
        this.loadVideo(nextProps.file);
    }

    componentWillUnmount() {
        this.destructVideoEl();
    }

    constructVideoEl(file) {
        var wrapper = document.createElement('div');
        var video = '<video class="video-js vjs-sublime-skin" controls preload="auto" autoplay height="100%" width="100%" src="' + URL.createObjectURL(file) + '" type="' + file.type + '"></video>';

        wrapper.innerHTML = video;
        var videoEl = wrapper.firstChild;

        this.refs.target.getDOMNode().appendChild(videoEl);

        videoEl.addEventListener('loadeddata', this.handleMediaLoaded);
        videoEl.addEventListener('ended', this.handleMediaEnd);

        /* global videojs */
        return videojs(videoEl, {});
    }

    destructVideoEl() {
        var target = this.refs.target.getDOMNode();
        var videoEl = target.getElementsByTagName('video')[0];

        videoEl.removeEventListener('loadeddata', this.handleMediaLoaded);
        videoEl.removeEventListener('ended', this.handleMediaEnd);

        while(target.firstChild) {
            target.removeChild(target.firstChild);
        }
    }

    loadVideo(file) {
        var videoEl = this.refs.target.getDOMNode().getElementsByTagName('video')[0];

        videoEl.src = URL.createObjectURL(file);
        videoEl.type = file.type;
    }

    handleMediaLoaded() {
        console.log('video file loaded');
    }

    handleMediaEnd() {
        this.props.handleMediaEnd();
    }

    render() {
        return (
            <div className='comp-player-video' ref='target'></div>
        );
    }
}

export default Video;
