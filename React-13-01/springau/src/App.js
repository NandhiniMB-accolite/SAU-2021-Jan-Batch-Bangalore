import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"; 
import Header from './header';
import Input from './input';

class App extends Component{
  constructor(){
    super();
    this.state = {
     name:"Accolite Digitals"
    };
    this.headerRef =  React.createRef();
    // this.changeName=this.changeName.bind(this);

    
    // setTimeout(()=>{
    //   // this.state.name = "ACC";
    //   console.log( this.state.name)
    //   this.setState({name:"ACC"});
    // },2000);
  }
  
  handleOnChange = (name) => {

    // this.setState({name:myname});
    this.headerRef.current.handleOnChange(name) //only this will cause rerendering  not this.name= name
    console.log(this.name);
  }
  // componentDidMount(){}
  // shouldComponentUpdate(prev,next){
  //   return !(this.state.name == next.name)
  // }
  // componentDidUpdate(){}
  // componentWillUnmount(){}
  render(){
    
    return (
      <>
          {/* <h1> Hello {this.state.name}</h1>
          <button onClick={this.changeName}></button> */}
          <Header ref={this.headerRef}/>
          <Input handleOnChange={this.handleOnChange}/>
      </>
      
    );
  }
}

export default App;
