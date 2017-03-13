import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import './index';

class App extends Component {
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
                    <span>{tip}</span>
                </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
