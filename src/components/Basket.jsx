import React, { Component } from 'react';

class Basket extends Component {

  render() {
    console.log('Basket', this.props.basket[0]);
    return (
      <div>
        <button
          className={("main-button") + (this.props.basket[0] === true ? ' green' : '')}
          onClick={() => this.props.handleClick(0 , 'Basket')}>
            IN DEN WARENKORB
        </button>
      </div>
    )
  }
}

export default Basket;
