import React from 'react';

var styles = {
    list: {
    }
};

class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul style={styles.list}>
                {this.props.files.map((file, i) => {
                    return (
                        <li key={i} data={file}>{file.name}</li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
