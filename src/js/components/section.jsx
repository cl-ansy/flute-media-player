import React    from 'react';
import Video    from './player/video';

var styles = {
    section: {
        flex: '3 auto',
        order: '2',
        height: '90%',
        backgroundColor: 'rgba(13, 22, 29, 1)'
    }
};

const VIDEO = ['video/x-matroska'];

class Section extends React.Component {
    constructor() {
        super();
        this._bind('getPlayer');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    getPlayer() {
        var file = this.props.selectedFile;
        var player;

        if (VIDEO.indexOf(file.type) !== -1) {
            player = <Video file={file} />
        }

        return player;
    }

    render() {
        return (
            <section style={styles.section}>
                {this.getPlayer()}
            </section>
        );
    }
}

export default Section;
