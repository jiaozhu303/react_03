import React from 'react';

class Rrange extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

    }

    render() {
        const {update} = this.props;

        return (
            <div>
                <button onClick={update}>点击RANGE</button>
            </div>
        );
    }
}

export default Rrange;