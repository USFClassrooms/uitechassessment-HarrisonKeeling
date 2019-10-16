import PropTypes from 'prop-types';
import React from 'react';
import StoreItem from 'components/StoreItem';
import './CartPage.scss';

class CartPage extends React.PureComponent {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div className="cartPage">
        { items.map((item) => <StoreItem key={item.id} {...item} />) }
      </div>
    );
  }
}


CartPage.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartPage;
