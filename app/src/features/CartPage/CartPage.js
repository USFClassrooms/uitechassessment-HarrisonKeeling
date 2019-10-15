import PropTypes from 'prop-types';
import React from 'react';

class CartPage extends React.PureComponent {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { items } = this.props;
    return JSON.stringify(items);
  }
}


CartPage.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartPage;
