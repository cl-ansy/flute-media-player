import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className='comp-header'>
                <button
                    className='btn pure-button'
                    onClick={this.props.handleNavToggle}>
                    <i className='fa fa-bars'></i></button>
                <h2>{this.props.selectedFile.name || 'Flute Media Player'}</h2>
            </header>
        );
    }
}

export default Header;
