import React, { Component } from 'react';

class Kragenweite extends Component {

  render() {
    const my_data = this.props.data.availableOptions;
    const niz_dostupnih = this.props.avaliableKragenweite;
    console.log('Kragenweite dostupni ', this.props.avaliableKragenweite);

    return (
      <div>
        <div className="Kragenweite">Kragenweite</div>
        <ul className="first-block">
          {my_data[0].options
            .map(option =>
              <li key={option.value}>
                <a
                    className={(option.value === this.props.kragenweite ? "clicked " : '') +
                              ((niz_dostupnih.indexOf(option.value) !== -1) ? '' : 'grayout')}
                    onClick={() => this.props.handleClick(option.value, my_data[0].label)}
                    href="/#/template">
                  {option.value}
                </a>
              </li>)
          }
        </ul>
      </div>
    )
  }

}

export default Kragenweite;
