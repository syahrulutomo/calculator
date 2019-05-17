import React from 'react';
import Result from './components/result';
import Numbers from './components/numbers';
import Operators from './components/operators';
import Formatter from "./components/formatter";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '0',
      operator: '',
      next: '0',
      result: '0'
    }
    this.handleClickNumber = this.handleClickNumber.bind(this);
    this.handleClickOperator = this.handleClickOperator.bind(this);
  }

  handleClickNumber(value) {

    if(this.state.operator === ''){
      if(this.state.value === '0'){
        this.setState({
          result: '0',
          value: value
        });
      } else if(Number(this.state.value) > 0){
        let numStr = this.state.value.toString();
        numStr = numStr + value;
        this.setState({
          value: numStr
        });
      }
    } else if(this.state.operator !== '') {
      if(this.state.next === '0'){
        this.setState({
          next: value
        });
      } else if(Number(this.state.next) > 0){
        let numStr = this.state.next.toString();
        numStr = numStr + value;
        this.setState({
          next: numStr
        });
      }
    }
   
  }

  handleClickOperator(sign) {
    if(this.state.operator === ''){
      this.setState((state, props) => ({
        operator: sign
      }));
    } else if(this.state.operator !== '' ) {
      let result;
      const value = Number(this.state.value);
      const next = Number(this.state.next); 

      switch(this.state.operator){
        case 'equal':
          if(this.state.operator === 'add'){
            result = Number(this.state.value) + Number(this.state.next);
            result = result.toFixed(2);
          } else if(this.state.operator === 'substract'){
            result = Number(this.state.value) - Number(this.state.next);
            result = result.toFixed(2);
          } else if(this.state.operator === 'multiply'){
            result = Number(this.state.value) * Number(this.state.next);
            result = result.toFixed(2);
          } else if(this.state.operator === 'divide'){
            result = Number(this.state.value) / Number(this.state.next);
            result = result.toFixed(2);
          } 

          this.setState({
            result: result.toString(),
            next: '0',
            operator: '',
            value: '0',
          });   
          break;
        case 'divide':
          result = value / next;
          result = result.toFixed(2);
          this.setState({
            value: result.toString(),
            next: '0',
            operator: sign,
          })
          break;
        case 'multiply':
          result = value * next;
          result = result.toFixed(2);
          this.setState({
            value: result.toString(),
            next: '0',
            operator: sign,
          })
          break;
        case 'add':
          result = value + next;
          result = result.toFixed(2);
          this.setState({
            value: result.toString(),
            next: '0',
            operator: sign,
          })
          break;
        case 'substract':
          result = value - next;
          result = result.toFixed(2);
          this.setState({
            value: result.toString(),
            next: '0',
            operator: sign,
          })
          break;
        default:
          return;
      }
    } 
    
  }

  nextValue(value) {
    this.setState({
      next: value,
    })
  }

  render() { 
    let value = '';

    if(this.state.result !== '0'){
      value = this.state.result;
    } else if(this.state.next !== '0'){
      value = this.state.next;
    } else{
      value = this.state.value;
    }

    console.log(this.state.value, this.state.next, this.state.operator);
    return (
      <div className="App">
        <Result value={value} />
        <Formatter />
        <Numbers handleClick={ this.handleClickNumber }/>
        <Operators nextValue={ this.nextValue } handleClick={ this.handleClickOperator }/>
      </div>
    );
  }
  
}

export default App;
