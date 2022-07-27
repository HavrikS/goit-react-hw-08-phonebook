import React, { Component } from 'react'
import css from 'components/App.module.css'


export class App extends Component {
  
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

  // handleButtonGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }))
  // };


  render() {
    return (      
      <div className={css.container}>
        <p>Test</p>
      </div>
    );
  }
}

export default App;
