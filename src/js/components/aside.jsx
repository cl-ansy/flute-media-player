import React    from 'react';

import Reader   from './file/reader';

var styles = {
    aside: {
        flex: '0 1 auto',
        order: '1',
        height: '90%',
        backgroundColor: 'rgba(44, 55, 64, 1)'
    }
};

class Aside extends React.Component {
    render() {
        return (
            <aside style={styles.aside}>
                <Reader />
            </aside>
        );
    }
}

export default Aside;
