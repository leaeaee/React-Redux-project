import React, { Component } from 'react';

class Armellange extends Component {

  render() {
    const my_data = this.props.data.availableOptions;
    const niz_dostupnih = this.props.avaliableArmellange;
    console.log('Armellange dostupni', this.props.avaliableArmellange);

    return (
      <div>
        <div className="Armellange">Armellange</div>
        <ul className="second-block">
          {my_data[1].options
            .map(option =>
            <li key={option.value}>
              <a
                className={
                  (option.value === this.props.armellange ? "clicked " : '') +
                  (niz_dostupnih.indexOf(option.value) !== -1 ? '' : 'grayout')}
                onClick={() => this.props.handleClick(option.value, my_data[1].label)}
                href="/#/template">
                {option.value}
              </a>
            </li>)}
        </ul>
      </div>
    )
  }

}

export default Armellange;
