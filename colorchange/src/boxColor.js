import React, { Component } from 'react';

class Colorbox extends Component {
    constructor(props){
    super(props)
      this.state = {
        color: ["white", "green", "blue", "yellow", "red", "purple", "orange", "brown"],
        counter: 0,
        currColor: "white"
        }
    }

    colorChange = () => {
        let {counter} = this.state
        let countCheck = (counter > 6) ? 0 : counter + 1
        let currentColor = this.state.color[countCheck];
        this.setState( {counter: countCheck, currColor: currentColor} )
    }

    render() {
        return (
          <div>
          <button className='colChange' onClick={this.colorChange} style={{backgroundColor: this.state.currColor}}>{this.state.currColor}</button>
          </div>
        );
      }
    }

export default Colorbox;
