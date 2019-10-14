import React, { Component } from 'react';
import './App.css';
import Kragenweite from './components/Kragenweite';
import Armellange from './components/Armellange';
import Manschettenart from './components/Manschettenart';
import Basket from './components/Basket';

import { connect } from 'react-redux';

class App extends Component {

  render() {

    return (
      <div className="App">
          <div id="košulja">
            <img src={require("./assets/košulja.jpg")} alt="kosulja"/>
          </div>

          <div id="main-block">
            <p className="main-title">CHARLES TYRWHITT</p>
            <p className="side-title">Extra Slim Fit Business-Casual Hemd</p>
                <Kragenweite
                      data={this.props.data}
                      kragenweite={this.props.kragenweite}
                      avaliableKragenweite={this.props.avaliableKragenweite}
                      handleClick={this.props.addSelect}/>
                <Armellange
                      data={this.props.data}
                      armellange={this.props.armellange}
                      avaliableArmellange={this.props.avaliableArmellange}
                      handleClick={this.props.addSelect}/>
                <Manschettenart
                      data={this.props.data}
                      manschettenart={this.props.manschettenart}
                      avaliableManschettenart={this.props.avaliableManschettenart}
                      handleClick={this.props.addSelect}/>
                <Basket
                  basket={this.props.basket}
                  handleClick={this.props.addSelect}
                />
            <div className="side-buttons">
              <button className="side-button1">MERKEN</button>
              <button className="side-button2">zum Shop</button>
                <div className="bottom">CHARLES TYRWHITT</div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.Data,
    kragenweite: state.selectedKragenweite,
    armellange: state.selectedArmellange,
    manschettenart: state.selectedManschettenart,
    avaliableKragenweite: state.avaliableKragenweite,
    avaliableArmellange: state.avaliableArmellange,
    avaliableManschettenart: state.avaliableManschettenart,
    basket: state.Basket
    }
};

const mapDispatchToProps = dispatch => {
    return{
        addSelect: (value, label) => dispatch ({type: 'ADD_SELECT', value, label}),
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
