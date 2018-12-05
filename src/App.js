import React, { Component } from 'react';
import './App.css';
import ButtonGroup from './components/ButtonGroup';
import Display from './components/Display';


class App extends Component {
  state = {
    result:null,
    currentOperand:null,
    secondOperand:null,
    operation:null
  }
  handleButtonClick = (value) => (event) => {
      if(value==='AC'){
        this.setState({
          result:null,
          currentOperand:null,
          secondOperand:null,
          operation:null
        });
      }
      // handling .
      else if(value === '.'){
        if(this.state.currentOperand === null){
          this.setState({
            currentOperand:'0.',
          })
        }else if(!this.state.currentOperand.includes('.')){
          this.setState({
            currentOperand:this.state.currentOperand.concat('.'),
          })
        }
      }
      //handling number
      else if(/[0-9]+/.test(value)){
        //if first operand
        if(this.state.operation === null){
          if(this.state.currentOperand === null){
            this.setState({
              currentOperand : value,
            });
          }else{
            this.setState({
              currentOperand : this.state.currentOperand.concat(value),
            });
          }
        }
        //second operand
        else{
          if(this.state.secondOperand === null){
            this.setState({
              secondOperand : value,
            });
          }else{
            this.setState({
              secondOperand : this.state.secondOperand.concat(value),
            });
          }
        } 
        
      }
      //handle operator
      else if(['+','-','÷','x'].includes(value)){
          let opVar = value;
          if(opVar === '÷')
            opVar = '/';
          if(opVar === 'x')
            opVar = '*';
          if(this.state.operation === null)
            this.setState({operation : opVar, result:null});
          else
            this.setState({currentOperand:eval(''+ this.state.currentOperand+this.state.operation+this.state.secondOperand)+'',
                           operation : opVar,secondOperand:null});
      }
      //handling %
      else if(value === '%'){
        //% in second operand
        if(this.state.operation && this.state.secondOperand){
          let num = parseFloat(this.state.secondOperand)/100;
          this.setState({secondOperand : num});
        }
        //% in first operand
        else if(!this.state.operation && this.state.currentOperand){
          let num = parseFloat(this.state.currentOperand)/100;
          this.setState({currentOperand : num});
        }
      }
      //handling +/-
      else if(value === '+/-'){
        //in second operand
        if(this.state.operation && this.state.secondOperand){
          let num = -1 *parseFloat(this.state.secondOperand);
          this.setState({secondOperand : num});
        }
        // in first operand
        else if(!this.state.operation && this.state.currentOperand){
          let num = -1 * parseFloat(this.state.currentOperand);
          this.setState({currentOperand : num});
        }
      }
      //handling =
      else if(value === '='){
        if(this.state.currentOperand && this.state.operation && this.state.secondOperand){
          this.setState({
            result:eval(''+this.state.currentOperand+this.state.operation+this.state.secondOperand+''),
            currentOperand:eval(''+this.state.currentOperand+this.state.operation+this.state.secondOperand+''),
            secondOperand:null,
            operation:null
          })
        }
      }
  }
  render() {
    return (
      <div className="app">
          <Display result={this.state.result ||this.state.secondOperand || this.state.currentOperand || '0'}/>
          <ButtonGroup handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;
