import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import Quotes from './components/Quotes';

class App extends React.Component {
  randomQuote(){
    const randomNumber = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomNumber]
  }

  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }
  
  constructor() {
    const randomNumber = Math.floor(Math.random() * Quotes.length);
    super();
    this.state = {
      quote: Quotes[randomNumber].quote,
      author: Quotes[randomNumber].author,
    };
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(Quotes)
  };

  render() {
    return (
      <QuoteBox handleClick={this.handleClick}{...this.state}/>
    );
  }
}

export default App;
