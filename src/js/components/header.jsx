import React from 'react';

var styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 100%',
        height: '10%',
        backgroundColor: 'rgba(4, 32, 55, 1)',
        fontWeight: 'bold',
        fontSize: '1.3em',
        color: 'rgba(255, 255, 255, 1)'
    }
};

class Header extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                {this.props.selectedFile.name}
            </header>
        );
    }
}

export default Header;
