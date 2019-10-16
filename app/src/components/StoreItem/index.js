import PropTypes from 'prop-types';
import React from 'react';
import './StoreItem.scss';

class StoreItem extends React.PureComponent {
  render() {
    const {
      amount,
      description,
      id,
      name,
      price,
    } = this.props;

    return (
      <div className="storeItem">
        <div className="header">
          <h2>{name}</h2>
          <span className="id">{`Product ID: ${id}`}</span>
          <span className="price">{`Price: ${price}`}</span>
        </div>
        <span className="amount">{`Amount: ${amount}`}</span>
        <p>{description}</p>
      </div>
    );
  }
}

StoreItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  amount: PropTypes.number.isRequired,
};

StoreItem.defaultProps = {
  description: '(No Description Available)',
};

export default StoreItem;
