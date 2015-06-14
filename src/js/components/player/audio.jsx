import React    from 'react';

class Audio extends React.Component {
    constructor() {
        super();
        this._bind(
            'loadAudio',
            'handleMediaLoaded',
            'handleMediaEnd');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        var audioEl = this.refs.audio.getDOMNode();
        audioEl.addEventListener('loadeddata', this.handleMediaLoaded);
        audioEl.addEventListener('ended', this.handleMediaEnd);
    }

    componentWillUnmount() {
        var audioEl = this.refs.audio.getDOMNode();
        audioEl.removeEventListener('loadeddata', this.handleMediaLoaded);
        audioEl.removeEventListener('ended', this.handleMediaEnd);
    }

    handleMediaLoaded() {
        console.log('audio file loaded');
    }

    handleMediaEnd() {
        this.props.handleMediaEnd();
    }

    loadAudio() {
        var file = this.props.file;
        var audioUrl = URL.createObjectURL(file);

        return audioUrl;
    }

    render() {
        return (
            <audio controls autoPlay
                ref='audio'
                src={this.loadAudio()}
                className='comp-player-audio'></audio>
        );
    }
}

export default Audio;
