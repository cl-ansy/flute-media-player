import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className='comp-header'>
                {this.props.selectedFile.name}
            </header>
        );
    }
}

export default Header;
