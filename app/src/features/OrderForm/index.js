import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addItem } from 'ducks/cart';
import { removeSuccess, selectSuccess } from 'ducks/ui/success';
import { removeError, selectError } from 'ducks/ui/error';
import OrderForm from './OrderForm';

class OrderFormContainer extends React.PureComponent {
  render() {
    if (this.props.addSuccess) {
      return <Redirect to="/cart" />;
    }
    return (
      <OrderForm
        addItem={this.props.addItem}
        clearError={this.props.clearError}
        clearSuccess={this.props.clearSuccess}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItem(item)),
    clearError: () => dispatch(removeError('orderForm')),
    clearSuccess: () => dispatch(removeSuccess('orderForm')),
  };
}

function mapStateToProps(state) {
  return {
    addSuccess: selectSuccess(state, 'orderForm'),
    addFailure: selectError(state, 'orderForm'),
  };
}

OrderFormContainer.propTypes = {
  addItem: PropTypes.func.isRequired,
  addSuccess: PropTypes.bool,
  clearError: PropTypes.func.isRequired,
  clearSuccess: PropTypes.func.isRequired,
};

OrderFormContainer.defaultProps = {
  addSuccess: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormContainer);
