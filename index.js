import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleForm from './SimpleForm';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple form</h1>
        <SimpleForm withValidation={false} />
        <h1>Simple form with validation</h1>
        <SimpleForm withValidation={true}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
