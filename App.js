import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }

  handleRed = (event) => {
    this.setState({
      red: event.target.value
    });
  };
  handleGreen = (event) => {
    this.setState({
      green: event.target.value
    });
  };
  handleBlue = (event) => {
    this.setState({
      blue: event.target.value
    });
  };

  render() {
    return (
      <div style={{backgroundColor:"rgb("+(this.state.red*2.50)+","+(this.state.green*2.50)+","+(this.state.blue*2.50)+")",height:"100vh"}}>
        <div style={{
          backgroundColor:"white",
          width:200,
          padding:20,
          marginLeft:5,
          marginTop:10,
          borderRadius:10
        }}
        >
        Red:
        <input type="range" 
        value={this.state.red} 
        onChange={this.handleRed} />
        <br />
        Green:
        <input
          type="range"
          value={this.state.green}
          onChange={this.handleGreen}
        />
        <br />
        Blue:
        <input
          type="range"
          value={this.state.blue}
          onChange={this.handleBlue}
        />
        <br />
        {this.state.red}
      </div>
      </div>
    );
  }
}
