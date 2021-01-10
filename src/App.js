/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Congrats from './components/Congrats';
import GuessedWord from './components/GuessedWords';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
      guessedWords: [
        {
          guessedWord: 'train',
          letterMatchCount: 3,
        },
      ],
    };
  }

  render() {
    const { success, guessedWords } = this.state;
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <br />
        <GuessedWord guessedWords={guessedWords} />
      </div>
    );
  }
}

export default App;
