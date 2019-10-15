import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, selectItems } from 'ducks/cart';
import CartPage from './CartPage';

class CartPageContainer extends React.PureComponent {
  render() {
    return (
      <CartPage
        fetchItems={this.props.fetchItems}
        items={this.props.items}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => dispatch(fetchCart()),
  };
}

function mapStateToProps(state) {
  return {
    items: selectItems(state),
  };
}

CartPageContainer.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
