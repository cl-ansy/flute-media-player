import React    from 'react';
import Video    from './player/video';
import Audio    from './player/audio';

const VIDEO = [
    'video/x-matroska',
    'video/mp4'
];
const AUDIO = [
    'audio/mp3',
    'audio/wav',
    'audio/ogg',
    'audio/opus',
    'audio/weba'
];

class Content extends React.Component {
    constructor() {
        super();
        this._bind('getPlayer');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.selectedFile.name !== nextProps.selectedFile.name;
    }

    getPlayer() {
        var file = this.props.selectedFile;
        var player;

        if (VIDEO.indexOf(file.type) !== -1) {
            player = <Video file={file} />
        }
        else if (AUDIO.indexOf(file.type) !== -1) {
            player = <Audio file={file} />
        }

        return player;
    }

    render() {
        return (
            <main className='comp-main'>
                {this.getPlayer()}
            </main>
        );
    }
}

export default Content;
