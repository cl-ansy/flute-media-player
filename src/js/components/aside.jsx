import React from 'react';

var styles = {
    aside: {
        flex: '1 auto',
        order: '1',
        height: '100%',
        backgroundColor: 'rgba(44, 55, 64, 1)'
    }
};

class Aside extends React.Component {
    render() {
        return (
            <aside style={styles.aside}>
                Aside
            </aside>
        );
    }
}

export default Aside;
