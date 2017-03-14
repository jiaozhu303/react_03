import React from 'react';

class List extends React.Component {

    render(){
        let node = React.Children.map(this.props.children, (item) => {
            return <li>{item}</li>;
        });

        return (
                <ul>
                    {node}
                </ul>
        );
    }

}

export default List;