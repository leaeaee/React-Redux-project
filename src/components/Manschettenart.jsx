import React, { Component } from 'react';

class Manschettenart extends Component {

  render() {
    const my_data = this.props.data.availableOptions;
    const niz_dostupnih = this.props.avaliableManschettenart;
    console.log('niz_dostupnih manschettenart ', this.props.avaliableManschettenart);
    return (
      <div>
        <div className="Manschettenart">Manschettenart</div>
        <ul className="third-block">
          {my_data[2].options
            .map(option =>
            <li key={option.value}>
              <a
                className={
                  (option.value === this.props.manschettenart ? "clicked" : '') +
                  (niz_dostupnih.indexOf(option.value) !== -1 ? '' : 'grayout')}
                onClick={() => this.props.handleClick(option.value, my_data[2].label)}
                href="/#/template">
                {option.value}
              </a>
            </li>)}
        </ul>
      </div>
    )
  }
}


export default Manschettenart;
