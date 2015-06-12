import React from 'react';

var styles = {
    section: {
        flex: '5 auto',
        order: '2',
        height: '90%',
        backgroundColor: 'rgba(13, 22, 29, 1)'
    }
};

class Section extends React.Component {
    render() {
        return (
            <section style={styles.section}>
                Section
            </section>
        );
    }
}

export default Section;
