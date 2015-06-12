import React from 'react';

var styles = {
    header: {
        flex: '1 100%',
        height: '10%',
        backgroundColor: 'rgba(4, 32, 55, 1)'
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
