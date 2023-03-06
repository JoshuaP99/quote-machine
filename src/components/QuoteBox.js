import React from "react"

class QuoteBox extends React.Component{
  render() {
    return(
        <div className="card" id="quote-box">
          <div className="card-body">
            <h1 className="quote">"{this.props.quote}"</h1>
            <p className="author">"-{this.props.author}"</p>
          </div>
          <button className="custom-button" id="newquote" onClick={this.props.handleClick}>New Quote</button>
        </div>
    )
  }
}

export default QuoteBox