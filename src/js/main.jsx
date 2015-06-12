import React from 'react';
import Aside from './components/aside';
import Section from './components/section';

var mountNode = document.getElementById('main');

class Main extends React.Component {
    render() {
        return (
            <div className='container'>
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
