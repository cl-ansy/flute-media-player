import React    from 'react';

import Aside    from './components/aside';
import Section  from './components/section';

var mountNode = document.getElementById('main');

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';
mountNode.style.height = '100%';

var styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    }
};

class Main extends React.Component {
    render() {
        return (
            <div className='container' style={styles.container}>
                <Aside />
                <Section />
            </div>
        );
    }
}

React.render(
    <Main />,
    mountNode
);
