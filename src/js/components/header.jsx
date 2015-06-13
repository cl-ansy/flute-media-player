import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className='comp-header'>
                <h2>{this.props.selectedFile.name}</h2>
            </header>
        );
    }
}

export default Header;
