import React from 'react';

class Rrange extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

    }

    render() {
        const {updateNum} = this.props;

        return (
                <input onChange={updateNum} />
        );
    }
}

export default Rrange;