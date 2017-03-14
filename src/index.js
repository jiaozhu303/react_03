import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import Rrange from './components/Range';
import './indexStyle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'sta': 1};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({'sta': this.state.sta + 1});
    }

    render() {
        const data = {
                    name: 'zhaoDJ5',
                    desc: 'this is a description info ...',
                    url: 'http://lenovomaker.app.lefile.cn/Lenovo_Maker/2016/12/22/11554008957950.w200.jpg',
                    id: Math.random()
                },
                styles = {
                    'color': 'red',
                    'fontSize': '20px'
                },
                tip = "hello React ... ";

        return (
                <div className="container" style={styles}>
                    <Profile name={data.name} id={data.id} url={data.url} desc={data.desc}/>
                    <Rrange ref="one" update={this.update}/>
                    <Rrange ref="two" update={this.update}/>
                    <span>{this.state.sta}</span>
                </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
