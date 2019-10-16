import PropTypes from 'prop-types';
import React from 'react';
import './OrderForm.scss';

class OrderForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  submitOrder(event) {
    const { addItem, clearError, clearSuccess } = this.props;
    event.preventDefault();
    clearError();
    clearSuccess();
    addItem(this.state);
  }

  render() {
    return (
      <div className="orderForm">
        <form onSubmit={this.submitOrder}>
          <input
            onChange={this.onChange}
            name="name"
            placeholder="Product Name"
            type="text"
          />
          <input
            onChange={this.onChange}
            name="amount"
            placeholder="Amount"
            type="number"
          />
          <input
            onChange={this.onChange}
            name="price"
            placeholder="Price"
            type="number"
          />
          <textarea
            onChange={this.onChange}
            name="description"
            placeholder="Description"
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

OrderForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  clearSuccess: PropTypes.func.isRequired,
};

export default OrderForm;
