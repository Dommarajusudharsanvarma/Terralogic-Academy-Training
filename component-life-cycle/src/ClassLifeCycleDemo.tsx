import React, { Component } from 'react';
type IState = {
    count: number;
};
type IProps = {};

class ClassLifeCycleDemo extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = { count: 0};
        console.log("Constructor: Component is being created");
    }
    static getDerivedStateFromProps(props: any, state: any){
        console.log("getDerivedStateFromProps: Sync state with props if needed");
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount: Component mounted to DOM");
        
    }
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("shouldComponentUpdate: ", "Yes");
        return true;
        
    }
    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log("getSnapshotBeforeUpdate: Just before DOM is update");
        return null;
    }
    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
        console.log("componentDidUpdate: Component updated");
        
    }
    componentWillUnmount() {
        console.log("componentWillUnmount: Component is being removed");
        
    }
    increment = ()=>{
        this.setState({ count: this.state.count + 1});
    };
    render() {
        console.log("Render: Rendering component");
        return (
            <div>
                <h2>Lifecycle Demo Component</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );   
    }
} 


export default ClassLifeCycleDemo;