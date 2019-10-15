import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter />
      </Provider>
    );
  }
}


App.propTypes = {
  store: PropTypes.object.isRequired,
};


export default App;
