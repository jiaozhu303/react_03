import React from 'react';
import ReactDOM from 'react-dom';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'sta': 1};
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    update() {
        this.setState({'sta': this.state.sta + 1});
    }

    remove(){
        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
    }

    render() {
        let data = this.props;

        return (
                <div>
                    <img src={data.url} alt=""/>
                    <h1>{data.id}</h1>
                    <h1>{data.name}</h1>
                    <h3>{data.desc}</h3>
                    <h4 >{this.state.sta}</h4>
                    <button onClick={this.update}>点击</button>
                    <button onClick={this.remove}>卸载</button>
                </div>
        );
    }
}

Profile.propTypes = {
    url: React.PropTypes.string,
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    desc: React.PropTypes.string
};

Profile.defaultProps = {
    url: "111",
    id: 999,
    name: "name",
    desc: "desc"
};

export default Profile;