import React from 'react';

class ComponentLife extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'num': 1};
        this.update = this.update.bind(this);
    }

    componentWillMount(){
        console.log("组件将要挂在");
    }

    componentDidMount(){
        console.log("组件挂在完成");
    }

    componentWillUnmount(prevProps, prevState){
        console.log("组件将要卸载");
    }

    componentWillReceiveProps(){
        console.log("有属性props更新");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("setState()执行了 ....");
        return true;
    }

    componentWillUpdate(){
        console.log("组件将要更新");
    }

    componentDidUpdate(){
        console.log("组件更新完成");
    }

    update() {
        this.setState({'num': this.state.num + 1});
    }

    render() {
        console.log("组件正在渲染！");

        return (<div>
                    <span>{this.state.num}-{this.props.v}</span>
                    <button onClick={this.update}>戳一下噢</button>
                </div>);
    }

}

export default ComponentLife;