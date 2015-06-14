import React    from 'react';

class Audio extends React.Component {
    constructor() {
        super();
        this._bind('loadAudio');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    loadAudio() {
        var file = this.props.file;
        var audioUrl = URL.createObjectURL(file);

        return audioUrl;
    }

    render() {
        return (
            <audio controls autoPlay
                src={this.loadAudio()}
                className='comp-player-audio'></audio>
        );
    }
}

export default Audio;
