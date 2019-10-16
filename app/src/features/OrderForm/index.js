import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './OrderForm';

class OrderFormContainer extends React.PureComponent {
  render() {
    return (
      <OrderForm
        addItem={this.props.addItem}
        addSuccess={this.props.addSuccess}
      />
    );
  }
}

OrderFormContainer.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
    addItem: () => dispatch(() => {}),
  };
}

function mapStateToProps(state) {
  return {
    addSuccess: true,
  };
}

OrderFormContainer.propTypes = {
  addItem: PropTypes.func.isRequired,
  addSuccess: PropTypes.bool,
};

OrderFormContainer.defaultProps = {
  addSuccess: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormContainer);
