import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarContext from './CarContext';
class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cars: {
          red: false,
          blue: false,
          yellow: false,
        },
      };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side){
    this.setState({
        ...this.state, cars: {...this.state.cars, [car]: side}
    })
    console.log(this.state)
  }

  render() {
    const context = {
        ...this.state,
        moveCar: this.moveCar,
    }
    const { children } = this.props
    return (
        <CarContext.Provider value={ context }>
            {children}
        </CarContext.Provider>
    );
  }
}
Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  export default Provider;
  