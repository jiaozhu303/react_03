import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import Rrange from './components/Range';
import List from './components/List';
import ComponentLife from './components/ComponentLife';
import './indexStyle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            'one': {'sta': 1},
            'two': {'sta': 1}
        };

        this.updateNum = this.updateNum.bind(this);
    }


    updateNum() {
        this.setState({
            'one': {'sta': ReactDOM.findDOMNode(this.refs.one).value},
            'two': {'sta': ReactDOM.findDOMNode(this.refs.two).value}
        });
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
                };

        return (
                <div className="container" style={styles}>
                    <Profile name={data.name} id={data.id} url={data.url} desc={data.desc}/>
                    <div>
                        <Rrange ref="one" updateNum={this.updateNum}/>
                        <span>{this.state.one.sta}</span>
                    </div>
                    <div>
                        <Rrange ref="two" updateNum={this.updateNum}/>
                        <span>{this.state.two.sta}</span>
                    </div>
                    <List>
                        <a href="#">aaaaaaa</a>
                        <a href="#">bbbbbbb</a>
                    </List>
                    <ComponentLife v={this.state.one.sta}/>
                </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
