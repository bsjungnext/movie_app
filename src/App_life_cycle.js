import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
      console.log('1 Hello!');
    }
    
    state =  {
      count: 0,
    };

    add = ()=>{
      // console.log('add')
      // this.setState({count : this.state.count + 1});
      // };
      this.setState(current => ({
        count:current.count + 1,
      }))
    };

    minus = ()=>{
      // console.log('minus')
      // this.setState({count : this.state.count - 1});
      this.setState(current => ({
        count:current.count - 1,
      }))
      
    };


    componentDidMount(){
      console.log('2 component rendered')
    }

    componentDidUpdate(){
      console.log('4 I just updated')
    }

    componentWillUnmount(){
      console.log('Goodbye, everyone')
    }
    render(){
      console.log('3 I\'m rendering')
      return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      );
  }
}

export default App;