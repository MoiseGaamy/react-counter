import React from "react";

class ClassCounter extends React.Component{
    constructor() {
        super()
        this.state = { count: 0 };
    }
    
    handleIncrease() {
        this.setState({
             count: this.state.count + 1
         });
    }
    handleDecrease() {
        this.setState({
            count: this.state.count - 1
        });
    }
    
    render() {

        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.handleIncrease()} style={{backgroundColor:"blue"}}>increase count</button>
            <button  onClick={()=> this.handleDecrease()} style={{backgroundColor:"yellow"}}>decrease count</button>
            </div>
           
        )
        
    }
}
export default ClassCounter;