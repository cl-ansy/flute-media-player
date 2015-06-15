import React    from 'react';

import Video    from './player/video';
import Audio    from './player/audio';
import Image    from './player/image';

const VIDEO = [
    '.mkv',
    '.mp4',
    '.webm',
    '.avi',
    '.swf'
];
const AUDIO = [
    '.mp3',
    '.wav',
    '.ogg'
];
const IMAGE = [
    '.jpg',
    '.png',
    '.gif'
];

class Content extends React.Component {
    constructor() {
        super();
        this._bind('getPlayer', 'handleMediaEnd');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.selectedFile.name !== nextProps.selectedFile.name;
    }

    handleMediaEnd() {
        this.props.handleMediaEnd();
    }

    getPlayer() {
        var file = this.props.selectedFile;
        var reExt = /\.[0-9a-z]+$/i;
        var ext = file.name && file.name.match(/\.[0-9a-z]+$/i)[0].toLowerCase();
        var player;

        //TODO: refactor
        if (!ext) {
            player = <p></p>
        }
        else if (VIDEO.indexOf(ext) !== -1) {
            player = <Video
                        file={file}
                        handleMediaEnd={this.handleMediaEnd} />
        }
        else if (AUDIO.indexOf(ext) !== -1) {
            player = <Audio
                        file={file}
                        handleMediaEnd={this.handleMediaEnd} />
        }
        else if (IMAGE.indexOf(ext) !== -1) {
            player = <Image
                        file={file} />
            }
        else {
            player = <p>Unsupported File Type "{ext}"</p>
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
