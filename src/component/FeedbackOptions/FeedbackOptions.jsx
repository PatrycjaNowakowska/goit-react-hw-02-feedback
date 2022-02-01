import React, { Component } from "react";

class FeedbackOptions extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    }
    

    render() {
        return (
            <div>
                <p>Pls leave feed</p>
            </div>
        )
    }

}




export default FeedbackOptions;