import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import CartPage from 'features/CartPage';

function App(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/cart" component={CartPage} />
      </BrowserRouter>
    </Provider>
  );
}


App.propTypes = {
  store: PropTypes.object.isRequired,
};


export default App;
