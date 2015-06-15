import React    from 'react';

class Image extends React.Component {
    constructor() {
        super();
        this._bind(
            'loadImage',
            'handleMediaLoaded');
    }

    // TODO: refactor this into a base class
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        var imageEl = this.refs.image.getDOMNode();
        imageEl.addEventListener('loadeddata', this.handleMediaLoaded);
    }

    componentWillUnmount() {
        var imageEl = this.refs.image.getDOMNode();
        imageEl.removeEventListener('loadeddata', this.handleMediaLoaded);
    }

    handleMediaLoaded() {
        console.log('image file loaded');
    }

    handleMediaEnd() {
        this.props.handleMediaEnd();
    }

    loadImage() {
        var file = this.props.file;
        var imageUrl = URL.createObjectURL(file);

        return imageUrl;
    }

    render() {
        return (
            <img
                ref='image'
                src={this.loadImage()}
                className='comp-player-image'></img>
        );
    }
}

export default Image;
